/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Notification,
  NotificationStatus,
  NotificationType,
} from '@backstage/plugin-notifications-common';

/** @public */
export type NotificationGetOptions = {
  user_ref: string;
  type?: NotificationType;
};

/** @public */
export type NotificationModifyOptions = {
  ids: string[];
} & NotificationGetOptions;

/** @public */
export interface NotificationsStore {
  getNotifications(options: NotificationGetOptions): Promise<Notification[]>;

  saveNotification(notification: Notification): Promise<void>;

  getExistingTopicNotification(options: {
    user_ref: string;
    topic: string;
  }): Promise<Notification | null>;

  restoreExistingNotification(options: {
    id: string;
    notification: Notification;
  }): Promise<Notification | null>;

  getNotification(options: { id: string }): Promise<Notification | null>;

  getStatus(options: NotificationGetOptions): Promise<NotificationStatus>;

  markRead(options: NotificationModifyOptions): Promise<void>;

  markUnread(options: NotificationModifyOptions): Promise<void>;

  markDone(options: NotificationModifyOptions): Promise<void>;

  markUndone(options: NotificationModifyOptions): Promise<void>;

  markSaved(options: NotificationModifyOptions): Promise<void>;

  markUnsaved(options: NotificationModifyOptions): Promise<void>;
}
