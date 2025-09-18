// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

function createProfile(username) {
  return {
    username,
    name: username.charAt(0).toUpperCase() + username.slice(1),
    bio: `This is a short bio for ${username}.`,
    rank: Math.floor(Math.random() * 100) + 1,
    achievements: [
      { id: 1, title: 'First Post', date: '2024-06-01' },
      { id: 2, title: '100 Comments', date: '2024-07-15' },
    ],
  };
}

function createAchievement() {
  return [
    { id: 1, title: 'First Post', date: '2024-06-01' },
    { id: 2, title: '100 Comments', date: '2024-07-15' },
    { id: 3, title: 'Community Helper', date: '2024-08-20' },
  ];
}


function createComment() {
  return [
    { id: 1, postId: 101, text: 'This is my first comment!', date: '2024-09-01' },
    { id: 2, postId: 102, text: 'I totally agree with this idea.', date: '2024-09-02' },
    { id: 3, postId: 103, text: 'Could you clarify more on this topic?', date: '2024-09-05' },
  ];
}


function createActivity() {
  return [
    { id: 201, type: 'post', title: 'My first post', date: '2024-09-01' },
    { id: 202, type: 'comment', title: 'Interesting discussion about React', date: '2024-09-02' },
    { id: 203, type: 'post', title: 'Another update from me', date: '2024-09-04' },
  ];
}

export const handlers = [
  // NOTE: exact same path shape the service calls:
  http.get('/api/profile/:username', ({ params }) => {
    return HttpResponse.json(createProfile(params.username));
  }),
  http.get('/api/profile/:username/achievement', ({ params }) => {
    return HttpResponse.json(createAchievement(params.username));
  }),
  http.get('/api/profile/:username/comment', ({ params }) => {
    return HttpResponse.json(createComment(params.username));
  }),
  http.get('/api/profile/:username/activity', ({ params }) => {
    return HttpResponse.json(createActivity(params.username));
  }),
];