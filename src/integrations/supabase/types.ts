export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agency_join_requests: {
        Row: {
          agency_id: string
          created_at: string | null
          id: string
          message: string | null
          status: Database["public"]["Enums"]["agency_join_request_status"]
          talent_id: string
          updated_at: string | null
        }
        Insert: {
          agency_id: string
          created_at?: string | null
          id?: string
          message?: string | null
          status?: Database["public"]["Enums"]["agency_join_request_status"]
          talent_id: string
          updated_at?: string | null
        }
        Update: {
          agency_id?: string
          created_at?: string | null
          id?: string
          message?: string | null
          status?: Database["public"]["Enums"]["agency_join_request_status"]
          talent_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agency_join_requests_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agency_join_requests_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "talent_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      agency_member: {
        Row: {
          agency_id: string
          created_at: string | null
          id: string
          member_id: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          agency_id: string
          created_at?: string | null
          id?: string
          member_id: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          agency_id?: string
          created_at?: string | null
          id?: string
          member_id?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agency_member_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agency_member_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      agency_profile: {
        Row: {
          agency_description: string | null
          avatar_url: string | null
          billing_address: string | null
          company_name: string
          company_size: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          id: string
          industry: string | null
          invitation_code: string | null
          past_collaborations: Json[] | null
          portfolio_links: Json | null
          services: string[] | null
          social_media: Json | null
          specialties: string[] | null
          stripe_account_id: string | null
          team_size: number | null
          updated_at: string | null
          user_id: string
          website: string | null
        }
        Insert: {
          agency_description?: string | null
          avatar_url?: string | null
          billing_address?: string | null
          company_name: string
          company_size?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          id?: string
          industry?: string | null
          invitation_code?: string | null
          past_collaborations?: Json[] | null
          portfolio_links?: Json | null
          services?: string[] | null
          social_media?: Json | null
          specialties?: string[] | null
          stripe_account_id?: string | null
          team_size?: number | null
          updated_at?: string | null
          user_id: string
          website?: string | null
        }
        Update: {
          agency_description?: string | null
          avatar_url?: string | null
          billing_address?: string | null
          company_name?: string
          company_size?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          id?: string
          industry?: string | null
          invitation_code?: string | null
          past_collaborations?: Json[] | null
          portfolio_links?: Json | null
          services?: string[] | null
          social_media?: Json | null
          specialties?: string[] | null
          stripe_account_id?: string | null
          team_size?: number | null
          updated_at?: string | null
          user_id?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agency_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      agency_talent_interactions: {
        Row: {
          agency_id: string
          created_at: string | null
          id: string
          status: string
          talent_id: string
          updated_at: string | null
        }
        Insert: {
          agency_id: string
          created_at?: string | null
          id?: string
          status?: string
          talent_id: string
          updated_at?: string | null
        }
        Update: {
          agency_id?: string
          created_at?: string | null
          id?: string
          status?: string
          talent_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agency_talent_interactions_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agency_talent_interactions_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "talent_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_history: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_matching_tasks: {
        Row: {
          created_at: string | null
          id: string
          status: string
          task_data: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string
          task_data: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string
          task_data?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          ip_address: string | null
          page_url: string
          referrer: string | null
          session_id: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          ip_address?: string | null
          page_url: string
          referrer?: string | null
          session_id: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          ip_address?: string | null
          page_url?: string
          referrer?: string | null
          session_id?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      analytics_sessions: {
        Row: {
          browser: string | null
          city: string | null
          country: string | null
          created_at: string | null
          device_type: string | null
          end_time: string | null
          id: string
          language: string | null
          os: string | null
          region: string | null
          screen_resolution: string | null
          start_time: string | null
          updated_at: string | null
          visitor_id: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          device_type?: string | null
          end_time?: string | null
          id?: string
          language?: string | null
          os?: string | null
          region?: string | null
          screen_resolution?: string | null
          start_time?: string | null
          updated_at?: string | null
          visitor_id?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          device_type?: string | null
          end_time?: string | null
          id?: string
          language?: string | null
          os?: string | null
          region?: string | null
          screen_resolution?: string | null
          start_time?: string | null
          updated_at?: string | null
          visitor_id?: string | null
        }
        Relationships: []
      }
      brand: {
        Row: {
          agency_id: string | null
          all_colors: Json | null
          assets: Json | null
          background_color: string | null
          brand_url: string | null
          brandvoice: string | null
          colors: Json | null
          createdat: string | null
          description: string | null
          fonts: Json | null
          hashtags: string | null
          id: string
          industry: string | null
          logo: string | null
          name: string
          primary_color: string | null
          primary_font: string | null
          requiredmentions: string | null
          secondary_color: string | null
          secondary_font: string | null
          socialmedia: Json | null
          updatedat: string | null
          user_id: string | null
        }
        Insert: {
          agency_id?: string | null
          all_colors?: Json | null
          assets?: Json | null
          background_color?: string | null
          brand_url?: string | null
          brandvoice?: string | null
          colors?: Json | null
          createdat?: string | null
          description?: string | null
          fonts?: Json | null
          hashtags?: string | null
          id?: string
          industry?: string | null
          logo?: string | null
          name: string
          primary_color?: string | null
          primary_font?: string | null
          requiredmentions?: string | null
          secondary_color?: string | null
          secondary_font?: string | null
          socialmedia?: Json | null
          updatedat?: string | null
          user_id?: string | null
        }
        Update: {
          agency_id?: string | null
          all_colors?: Json | null
          assets?: Json | null
          background_color?: string | null
          brand_url?: string | null
          brandvoice?: string | null
          colors?: Json | null
          createdat?: string | null
          description?: string | null
          fonts?: Json | null
          hashtags?: string | null
          id?: string
          industry?: string | null
          logo?: string | null
          name?: string
          primary_color?: string | null
          primary_font?: string | null
          requiredmentions?: string | null
          secondary_color?: string | null
          secondary_font?: string | null
          socialmedia?: Json | null
          updatedat?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brand_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_profile: {
        Row: {
          company_name: string
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          description: string | null
          id: string
          social_media: Json | null
          updated_at: string | null
          user_id: string
          website: string | null
        }
        Insert: {
          company_name: string
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          social_media?: Json | null
          updated_at?: string | null
          user_id: string
          website?: string | null
        }
        Update: {
          company_name?: string
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          social_media?: Json | null
          updated_at?: string | null
          user_id?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign: {
        Row: {
          additional_costs: Json | null
          additional_terms: string | null
          agencyid: string | null
          brandid: string
          budget: number
          campaign_type: string | null
          content_type: string[] | null
          content_usage_rights: string | null
          createdat: string | null
          creatorid: string
          description: string
          dress_code: string | null
          enddate: string
          equipment: string | null
          exclusive_rights: string | null
          exclusivity_terms: string | null
          format_requirements: string[] | null
          hashtags: string | null
          id: string
          is_public: boolean | null
          location: string | null
          minimum_engagement: number | null
          minimum_followers: number | null
          objective: string | null
          payment_structure: string | null
          platforms: string[] | null
          posting_date: string | null
          posting_schedule: string | null
          primary_contact: Json | null
          quantity: string | null
          require_exclusivity: boolean | null
          required_documents: Json | null
          required_skills: string | null
          requirements: Json
          startdate: string
          status: Database["public"]["Enums"]["campaign_status"]
          talent_niche: string | null
          title: string
          travel_expenses_covered: string[] | null
          travel_required: boolean | null
          updatedat: string | null
        }
        Insert: {
          additional_costs?: Json | null
          additional_terms?: string | null
          agencyid?: string | null
          brandid: string
          budget: number
          campaign_type?: string | null
          content_type?: string[] | null
          content_usage_rights?: string | null
          createdat?: string | null
          creatorid: string
          description: string
          dress_code?: string | null
          enddate: string
          equipment?: string | null
          exclusive_rights?: string | null
          exclusivity_terms?: string | null
          format_requirements?: string[] | null
          hashtags?: string | null
          id?: string
          is_public?: boolean | null
          location?: string | null
          minimum_engagement?: number | null
          minimum_followers?: number | null
          objective?: string | null
          payment_structure?: string | null
          platforms?: string[] | null
          posting_date?: string | null
          posting_schedule?: string | null
          primary_contact?: Json | null
          quantity?: string | null
          require_exclusivity?: boolean | null
          required_documents?: Json | null
          required_skills?: string | null
          requirements?: Json
          startdate: string
          status?: Database["public"]["Enums"]["campaign_status"]
          talent_niche?: string | null
          title: string
          travel_expenses_covered?: string[] | null
          travel_required?: boolean | null
          updatedat?: string | null
        }
        Update: {
          additional_costs?: Json | null
          additional_terms?: string | null
          agencyid?: string | null
          brandid?: string
          budget?: number
          campaign_type?: string | null
          content_type?: string[] | null
          content_usage_rights?: string | null
          createdat?: string | null
          creatorid?: string
          description?: string
          dress_code?: string | null
          enddate?: string
          equipment?: string | null
          exclusive_rights?: string | null
          exclusivity_terms?: string | null
          format_requirements?: string[] | null
          hashtags?: string | null
          id?: string
          is_public?: boolean | null
          location?: string | null
          minimum_engagement?: number | null
          minimum_followers?: number | null
          objective?: string | null
          payment_structure?: string | null
          platforms?: string[] | null
          posting_date?: string | null
          posting_schedule?: string | null
          primary_contact?: Json | null
          quantity?: string | null
          require_exclusivity?: boolean | null
          required_documents?: Json | null
          required_skills?: string | null
          requirements?: Json
          startdate?: string
          status?: Database["public"]["Enums"]["campaign_status"]
          talent_niche?: string | null
          title?: string
          travel_expenses_covered?: string[] | null
          travel_required?: boolean | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_agencyid_fkey"
            columns: ["agencyid"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_brandid_fkey"
            columns: ["brandid"]
            isOneToOne: false
            referencedRelation: "brand"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_creatorid_fkey"
            columns: ["creatorid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_application: {
        Row: {
          campaignid: string
          createdat: string | null
          id: string
          proposal: string | null
          status: Database["public"]["Enums"]["application_status"]
          updatedat: string | null
          userid: string
        }
        Insert: {
          campaignid: string
          createdat?: string | null
          id?: string
          proposal?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          updatedat?: string | null
          userid: string
        }
        Update: {
          campaignid?: string
          createdat?: string | null
          id?: string
          proposal?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          updatedat?: string | null
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_application_campaignid_fkey"
            columns: ["campaignid"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_application_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_escrow: {
        Row: {
          amount: number
          campaign_id: string
          created_at: string | null
          id: string
          status: string | null
          stripe_payment_intent_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          campaign_id: string
          created_at?: string | null
          id?: string
          status?: string | null
          stripe_payment_intent_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          campaign_id?: string
          created_at?: string | null
          id?: string
          status?: string | null
          stripe_payment_intent_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_escrow_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_matched_influencers: {
        Row: {
          campaign_id: string
          created_at: string | null
          id: string
          influencer_id: string
          score: number | null
          updated_at: string | null
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          id?: string
          influencer_id: string
          score?: number | null
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          id?: string
          influencer_id?: string
          score?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_influencer"
            columns: ["influencer_id"]
            isOneToOne: false
            referencedRelation: "influencer_data"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_talents: {
        Row: {
          campaign_id: string
          created_at: string | null
          id: string
          status: string | null
          talent_id: string
          updated_at: string | null
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          id?: string
          status?: string | null
          talent_id: string
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          id?: string
          status?: string | null
          talent_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_talents_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_talents_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "talent_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      deliverable: {
        Row: {
          campaign_talent_id: string | null
          campaignid: string
          content: string | null
          createdat: string | null
          duedate: string
          id: string
          metadata: Json | null
          notes: string | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          platform: string
          price_percentage: number | null
          status: Database["public"]["Enums"]["deliverable_status"]
          talentid: string | null
          type: string
          updatedat: string | null
        }
        Insert: {
          campaign_talent_id?: string | null
          campaignid: string
          content?: string | null
          createdat?: string | null
          duedate: string
          id?: string
          metadata?: Json | null
          notes?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          platform: string
          price_percentage?: number | null
          status?: Database["public"]["Enums"]["deliverable_status"]
          talentid?: string | null
          type: string
          updatedat?: string | null
        }
        Update: {
          campaign_talent_id?: string | null
          campaignid?: string
          content?: string | null
          createdat?: string | null
          duedate?: string
          id?: string
          metadata?: Json | null
          notes?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          platform?: string
          price_percentage?: number | null
          status?: Database["public"]["Enums"]["deliverable_status"]
          talentid?: string | null
          type?: string
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deliverable_campaign_talent_id_fkey"
            columns: ["campaign_talent_id"]
            isOneToOne: false
            referencedRelation: "campaign_talents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliverable_campaignid_fkey"
            columns: ["campaignid"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliverable_talentid_fkey"
            columns: ["talentid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      influencer_data: {
        Row: {
          bio: string | null
          collected_at: string | null
          created_at: string | null
          email: string | null
          follower_count: number | null
          followers: string | null
          id: string
          platform: string
          posts: Json | null
          profile_pic: string | null
          profile_url: string | null
          recent_posts: Json | null
          updated_at: string | null
          username: string
        }
        Insert: {
          bio?: string | null
          collected_at?: string | null
          created_at?: string | null
          email?: string | null
          follower_count?: number | null
          followers?: string | null
          id?: string
          platform: string
          posts?: Json | null
          profile_pic?: string | null
          profile_url?: string | null
          recent_posts?: Json | null
          updated_at?: string | null
          username: string
        }
        Update: {
          bio?: string | null
          collected_at?: string | null
          created_at?: string | null
          email?: string | null
          follower_count?: number | null
          followers?: string | null
          id?: string
          platform?: string
          posts?: Json | null
          profile_pic?: string | null
          profile_url?: string | null
          recent_posts?: Json | null
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      message: {
        Row: {
          content: string
          created_at: string | null
          id: string
          read: boolean | null
          receiver_id: string
          sender_id: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          receiver_id: string
          sender_id: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          receiver_id?: string
          sender_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      milestone_payments: {
        Row: {
          amount: number
          campaign_id: string
          created_at: string | null
          id: string
          milestone_description: string
          status: string | null
          stripe_payment_intent_id: string | null
          talent_id: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          campaign_id: string
          created_at?: string | null
          id?: string
          milestone_description: string
          status?: string | null
          stripe_payment_intent_id?: string | null
          talent_id: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          campaign_id?: string
          created_at?: string | null
          id?: string
          milestone_description?: string
          status?: string | null
          stripe_payment_intent_id?: string | null
          talent_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "milestone_payments_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "milestone_payments_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "talent_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      milestones: {
        Row: {
          amount: number | null
          campaign_id: string
          created_at: string | null
          description: string
          due_date: string
          id: string
          payment_status: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          campaign_id: string
          created_at?: string | null
          description: string
          due_date: string
          id?: string
          payment_status?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          campaign_id?: string
          created_at?: string | null
          description?: string
          due_date?: string
          id?: string
          payment_status?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "milestones_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
        ]
      }
      news_articles: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          image_url: string | null
          status: Database["public"]["Enums"]["article_status"] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          status?: Database["public"]["Enums"]["article_status"] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          status?: Database["public"]["Enums"]["article_status"] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      payment: {
        Row: {
          amount: number
          campaign_id: string | null
          created_at: string | null
          id: string
          metadata: Json | null
          status: Database["public"]["Enums"]["payment_status"]
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          type: Database["public"]["Enums"]["payment_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          status?: Database["public"]["Enums"]["payment_status"]
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          type: Database["public"]["Enums"]["payment_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          status?: Database["public"]["Enums"]["payment_status"]
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          type?: Database["public"]["Enums"]["payment_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      profile: {
        Row: {
          address: string | null
          agency_description: string | null
          audience_demographics: Json | null
          avatar: string | null
          bio: string | null
          brand_guidelines: string | null
          brand_values: string[] | null
          city: string | null
          company_size: string | null
          content_categories: string[] | null
          content_examples: Json[] | null
          country: string | null
          createdAt: string
          engagement: number | null
          followers: number
          id: string
          industry: string | null
          location: string | null
          past_collaborations: Json[] | null
          phone: string | null
          platforms: string[] | null
          portfolio_links: Json | null
          preferred_content_types: string[] | null
          previous_campaigns: Json[] | null
          profile_type: string | null
          rates: Json | null
          services: string[] | null
          skills: string[] | null
          socialLinks: Json | null
          specialties: string[] | null
          state: string | null
          target_audience: Json | null
          team_size: number | null
          updatedAt: string
          userId: string
          zip: string | null
        }
        Insert: {
          address?: string | null
          agency_description?: string | null
          audience_demographics?: Json | null
          avatar?: string | null
          bio?: string | null
          brand_guidelines?: string | null
          brand_values?: string[] | null
          city?: string | null
          company_size?: string | null
          content_categories?: string[] | null
          content_examples?: Json[] | null
          country?: string | null
          createdAt?: string
          engagement?: number | null
          followers?: number
          id?: string
          industry?: string | null
          location?: string | null
          past_collaborations?: Json[] | null
          phone?: string | null
          platforms?: string[] | null
          portfolio_links?: Json | null
          preferred_content_types?: string[] | null
          previous_campaigns?: Json[] | null
          profile_type?: string | null
          rates?: Json | null
          services?: string[] | null
          skills?: string[] | null
          socialLinks?: Json | null
          specialties?: string[] | null
          state?: string | null
          target_audience?: Json | null
          team_size?: number | null
          updatedAt?: string
          userId: string
          zip?: string | null
        }
        Update: {
          address?: string | null
          agency_description?: string | null
          audience_demographics?: Json | null
          avatar?: string | null
          bio?: string | null
          brand_guidelines?: string | null
          brand_values?: string[] | null
          city?: string | null
          company_size?: string | null
          content_categories?: string[] | null
          content_examples?: Json[] | null
          country?: string | null
          createdAt?: string
          engagement?: number | null
          followers?: number
          id?: string
          industry?: string | null
          location?: string | null
          past_collaborations?: Json[] | null
          phone?: string | null
          platforms?: string[] | null
          portfolio_links?: Json | null
          preferred_content_types?: string[] | null
          previous_campaigns?: Json[] | null
          profile_type?: string | null
          rates?: Json | null
          services?: string[] | null
          skills?: string[] | null
          socialLinks?: Json | null
          specialties?: string[] | null
          state?: string | null
          target_audience?: Json | null
          team_size?: number | null
          updatedAt?: string
          userId?: string
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_userId_fkey"
            columns: ["userId"]
            isOneToOne: true
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      social_media_auth: {
        Row: {
          access_token: string
          created_at: string | null
          expires_at: string | null
          id: string
          platform: string
          platform_user_id: string | null
          platform_username: string | null
          refresh_token: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          access_token: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          platform: string
          platform_user_id?: string | null
          platform_username?: string | null
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          access_token?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          platform?: string
          platform_user_id?: string | null
          platform_username?: string | null
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      stripe_subscription: {
        Row: {
          cancel_at: string | null
          canceled_at: string | null
          created_at: string | null
          current_period_end: string | null
          id: string
          metadata: Json | null
          price_id: string
          status: string
          stripe_customer_id: string
          stripe_subscription_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          canceled_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          id?: string
          metadata?: Json | null
          price_id: string
          status: string
          stripe_customer_id: string
          stripe_subscription_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          canceled_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string
          status?: string
          stripe_customer_id?: string
          stripe_subscription_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stripe_subscription_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      talent_favorites: {
        Row: {
          agency_id: string
          created_at: string | null
          id: string
          talent_id: string
        }
        Insert: {
          agency_id: string
          created_at?: string | null
          id?: string
          talent_id: string
        }
        Update: {
          agency_id?: string
          created_at?: string | null
          id?: string
          talent_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "talent_favorites_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "talent_favorites_talent_id_fkey"
            columns: ["talent_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      talent_profile: {
        Row: {
          agency_id: string | null
          audience_demographics: Json | null
          avatar: string | null
          bio: string | null
          content_categories: string[] | null
          content_examples: Json[] | null
          created_at: string | null
          engagement: number | null
          followers: number | null
          id: string
          instagram_metrics: Json | null
          is_public: boolean | null
          layout_config: Json | null
          location: string | null
          payment_details: Json | null
          payment_method_id: string | null
          platforms: string[] | null
          preferred_content_types: string[] | null
          public_url: string | null
          rates: Json | null
          skills: string[] | null
          social_links: Json | null
          tiktok_metrics: Json | null
          updated_at: string | null
          user_id: string
          youtube_metrics: Json | null
        }
        Insert: {
          agency_id?: string | null
          audience_demographics?: Json | null
          avatar?: string | null
          bio?: string | null
          content_categories?: string[] | null
          content_examples?: Json[] | null
          created_at?: string | null
          engagement?: number | null
          followers?: number | null
          id?: string
          instagram_metrics?: Json | null
          is_public?: boolean | null
          layout_config?: Json | null
          location?: string | null
          payment_details?: Json | null
          payment_method_id?: string | null
          platforms?: string[] | null
          preferred_content_types?: string[] | null
          public_url?: string | null
          rates?: Json | null
          skills?: string[] | null
          social_links?: Json | null
          tiktok_metrics?: Json | null
          updated_at?: string | null
          user_id: string
          youtube_metrics?: Json | null
        }
        Update: {
          agency_id?: string | null
          audience_demographics?: Json | null
          avatar?: string | null
          bio?: string | null
          content_categories?: string[] | null
          content_examples?: Json[] | null
          created_at?: string | null
          engagement?: number | null
          followers?: number | null
          id?: string
          instagram_metrics?: Json | null
          is_public?: boolean | null
          layout_config?: Json | null
          location?: string | null
          payment_details?: Json | null
          payment_method_id?: string | null
          platforms?: string[] | null
          preferred_content_types?: string[] | null
          public_url?: string | null
          rates?: Json | null
          skills?: string[] | null
          social_links?: Json | null
          tiktok_metrics?: Json | null
          updated_at?: string | null
          user_id?: string
          youtube_metrics?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "talent_profile_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agency_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "talent_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          createdAt: string
          email: string
          id: string
          name: string | null
          role: Database["public"]["Enums"]["role"]
          updatedAt: string
          userType: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          createdAt?: string
          email: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["role"]
          updatedAt?: string
          userType?: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["role"]
          updatedAt?: string
          userType?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
      user_workflow_states: {
        Row: {
          collected_data: Json
          conversation_id: string
          created_at: string | null
          id: number
          step: number
          user_id: string
          workflow: string
        }
        Insert: {
          collected_data: Json
          conversation_id: string
          created_at?: string | null
          id?: number
          step: number
          user_id: string
          workflow: string
        }
        Update: {
          collected_data?: Json
          conversation_id?: string
          created_at?: string | null
          id?: number
          step?: number
          user_id?: string
          workflow?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      accept_application: {
        Args: {
          p_campaign_id: string
          p_application_id: string
        }
        Returns: Json
      }
      generate_invitation_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      agency_join_request_status: "PENDING" | "ACCEPTED" | "REJECTED"
      application_status: "PENDING" | "ACCEPTED" | "REJECTED"
      article_status: "draft" | "published" | "archived"
      campaign_status: "DRAFT" | "ACTIVE" | "COMPLETED" | "CANCELLED"
      deliverable_status: "PENDING" | "SUBMITTED" | "APPROVED" | "REJECTED"
      payment_status: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED"
      payment_type: "CAMPAIGN_PAYMENT" | "SUBSCRIPTION" | "PLATFORM_FEE"
      role: "USER" | "ADMIN"
      talent_status: "liked" | "passed"
      user_type: "AGENCY" | "TALENT" | "BRAND"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
