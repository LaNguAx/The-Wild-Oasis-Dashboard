import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lwrrnblvgstibrlxohov.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cnJuYmx2Z3N0aWJybHhvaG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMjM5NTYsImV4cCI6MjA2MDg5OTk1Nn0.vg1BfGG4C7Jx2uDIgy_AYbcCqprwDIc9QxqGOGXyeWE`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
