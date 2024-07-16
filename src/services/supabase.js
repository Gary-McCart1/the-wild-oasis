
import {createClient} from '@supabase/supabase-js'
export const supabaseUrl = 'https://sdcwhqnucehaxgbaaxmd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkY3docW51Y2VoYXhnYmFheG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NTc2NjUsImV4cCI6MjAzNjAzMzY2NX0.6NAXIue3xbAdzrUNEWrVmqlEDVMZSLdscA-ZowE3KlE";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;