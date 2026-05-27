//* Libraries imports
import { useQuery } from "@tanstack/react-query";
import z from "zod";

const githubApiResponseSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  user_view_type: z.string(),
  site_admin: z.boolean(),
  name: z.string(),
  company: z.string(),
  blog: z.string(),
  location: z.string(),
  email: z.null(),
  hireable: z.boolean(),
  bio: z.string(),
  twitter_username: z.string(),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(),
  updated_at: z.string()
});

type GithubProfile = z.infer<typeof githubApiResponseSchema>;

function getGithubProfileStorageKey(username: string) {
  return `github-profile:${username}`;
}

function readGithubProfileFromStorage(username: string): GithubProfile | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = localStorage.getItem(getGithubProfileStorageKey(username));
  if (!stored) {
    return null;
  }

  try {
    return githubApiResponseSchema.parse(JSON.parse(stored));
  } catch {
    localStorage.removeItem(getGithubProfileStorageKey(username));
    return null;
  }
}

function saveGithubProfileToStorage(username: string, profile: GithubProfile) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    getGithubProfileStorageKey(username),
    JSON.stringify(profile),
  );
}

async function getGithubProfile(username: string) {
  const cached = readGithubProfileFromStorage(username);
  if (cached) {
    return cached;
  }

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  const profile = githubApiResponseSchema.parse(data);
  saveGithubProfileToStorage(username, profile);
  return profile;
}

export function useGithubProfile(username: string) {
  return useQuery({
    queryKey: ['github-profile', username],
    queryFn: () => getGithubProfile(username),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
}