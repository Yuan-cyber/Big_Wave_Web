-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    date DATE NOT NULL,
    people INTEGER NOT NULL CHECK (people > 0 AND people <= 20),
    message TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

-- Create team_profiles table
CREATE TABLE IF NOT EXISTS public.team_profiles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    image_url TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    active BOOLEAN DEFAULT true
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    location VARCHAR(255),
    verified BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON public.bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_team_profiles_order ON public.team_profiles(order_index);
CREATE INDEX IF NOT EXISTS idx_team_profiles_active ON public.team_profiles(active);
CREATE INDEX IF NOT EXISTS idx_reviews_featured ON public.reviews(featured);
CREATE INDEX IF NOT EXISTS idx_reviews_verified ON public.reviews(verified);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON public.reviews(rating);

-- Enable Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for bookings (public can insert, admin can read/update)
CREATE POLICY "Anyone can create bookings" ON public.bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can view all bookings" ON public.bookings
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can update bookings" ON public.bookings
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policies for team_profiles (public read, admin write)
CREATE POLICY "Anyone can view active team profiles" ON public.team_profiles
    FOR SELECT USING (active = true);

CREATE POLICY "Admin can manage team profiles" ON public.team_profiles
    FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for reviews (public read featured/verified, admin manage all)
CREATE POLICY "Anyone can view featured reviews" ON public.reviews
    FOR SELECT USING (featured = true AND verified = true);

CREATE POLICY "Admin can manage all reviews" ON public.reviews
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample data for team profiles
INSERT INTO public.team_profiles (name, role, bio, order_index, active) VALUES
('João Silva', 'Founder & Wave Expert', 'With over 15 years of experience in Nazaré, João knows every wave and every story of this magical place.', 1, true),
('Maria Santos', 'Safety Coordinator', 'Former lifeguard and marine biologist, Maria ensures every guest has a safe and educational experience.', 2, true),
('Pedro Costa', 'Local Guide', 'Born and raised in Nazaré, Pedro shares the authentic culture and hidden gems of our coastal town.', 3, true);

-- Insert sample reviews
INSERT INTO public.reviews (name, rating, comment, location, verified, featured) VALUES
('Sarah Johnson', 5, 'Absolutely incredible experience! The waves were massive and the team was so knowledgeable. A must-do when visiting Portugal!', 'California, USA', true, true),
('Marco Rossi', 5, 'Unforgettable day watching the giant waves. The science explanation made it even more fascinating. Highly recommended!', 'Rome, Italy', true, true),
('Emma Thompson', 4, 'Amazing experience! The team was professional and the views were breathtaking. Will definitely come back next season.', 'London, UK', true, true),
('Carlos Mendez', 5, 'The best way to experience Nazaré! Great guides, perfect timing with the waves, and learned so much about the ocean.', 'Madrid, Spain', true, true);
