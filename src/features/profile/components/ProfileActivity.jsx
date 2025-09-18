import React from 'react';
import Card from '../../../components/ui/Card';

import { useParams } from 'react-router-dom';
import { useActivityQuery } from '../api/useProfileQuery';

/**
 * ProfileActivity component
 *
 * Shows a user’s recent activity inside a Card.
 * Includes examples such as:
 * - Recent comments across different subs
 * - Recently created posts
 *
 * Currently static placeholder text, but designed to later
 * integrate with dynamic activity data from the platform.
 */

export default function ProfileActivity() {
  const { username } = useParams();
  const { data: activity = [] } = useActivityQuery(username);

  return (
    <Card title="Activity">
      <ul>
        {activity.map((item) => (
          <li key={item.id}>
            {item.title} <span className="text-xs text-gray-500">({item.date} - {item.type})</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
