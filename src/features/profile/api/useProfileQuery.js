import { useQuery } from '@tanstack/react-query'
import { getProfile, getAchievement, getActivity, getComment } from '@/services/profileService'

export function useProfileQuery(username) {
  return useQuery({
    queryKey: ['profile', username],
    // React Query passes an AbortSignal you can forward to fetch:
    queryFn: ({ signal }) => getProfile(username, signal),
    enabled: Boolean(username),  // don’t run until we actually have a username
  })
}

export function useAchievementQuery(username) {
  return useQuery({
    queryKey: ['achievements', username],
    // React Query passes an AbortSignal you can forward to fetch:
    queryFn: ({ signal }) => getAchievement(username, signal),
    enabled: Boolean(username),  // don’t run until we actually have a username
  })
}

export function useActivityQuery(username) {
  return useQuery({
    queryKey: ['activity', username],
    // React Query passes an AbortSignal you can forward to fetch:
    queryFn: ({ signal }) => getActivity(username, signal),
    enabled: Boolean(username),  // don’t run until we actually have a username
  })
}

export function useCommentQuery(username) {
  return useQuery({
    queryKey: ['comment', username],
    // React Query passes an AbortSignal you can forward to fetch:
    queryFn: ({ signal }) => getComment(username, signal),
    enabled: Boolean(username),  // don’t run until we actually have a username
  })
}