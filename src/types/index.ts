// Database Types
export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone?: string
          date: string
          people: number
          message?: string
          status: 'pending' | 'confirmed' | 'cancelled'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string
          date: string
          people: number
          message?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          date?: string
          people?: number
          message?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
      }
      team_profiles: {
        Row: {
          id: string
          created_at: string
          name: string
          role: string
          bio: string
          image_url?: string
          order: number
          active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          role: string
          bio: string
          image_url?: string
          order: number
          active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          role?: string
          bio?: string
          image_url?: string
          order?: number
          active?: boolean
        }
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          name: string
          rating: number
          comment: string
          location?: string
          verified: boolean
          featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          rating: number
          comment: string
          location?: string
          verified?: boolean
          featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          rating?: number
          comment?: string
          location?: string
          verified?: boolean
          featured?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Component Props Types
export interface BookingFormData {
  name: string
  email: string
  phone?: string
  date: string
  people: number
  message?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl?: string
  order: number
  active: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  location?: string
  verified: boolean
  featured: boolean
  createdAt: string
}

export interface Booking {
  id: string
  name: string
  email: string
  phone?: string
  date: string
  people: number
  message?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form State Types
export interface FormState {
  loading: boolean
  success: boolean
  error: string | null
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  current?: boolean
}

// SEO Types
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}
