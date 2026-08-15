import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ccsrmuoutlimnihehzqv.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjc3JtdW91dGxpbW5paGVoenF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3NDkzNDgsImV4cCI6MjEwMjMyNTM0OH0.dqcYjJmNjUBAQ9nAJa5YwsJBTuiHI0fblKC8udkS4PQ'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)