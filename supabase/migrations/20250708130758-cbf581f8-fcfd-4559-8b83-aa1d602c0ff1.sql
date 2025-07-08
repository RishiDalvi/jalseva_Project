-- Enable RLS on proposal_downloads table (if not already enabled)
ALTER TABLE public.proposal_downloads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts for proposal downloads
CREATE POLICY "Allow public inserts for proposal downloads" 
ON public.proposal_downloads 
FOR INSERT 
WITH CHECK (true);