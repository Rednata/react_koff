/* eslint-disable no-unused-vars */
import s from './Contacts.module.scss';
import VkSvg from './entypo-social_vk-with-circle.svg?react';
import YoutubeSvg from './mdi_youtube.svg?react';
import TelegramSvg from './bi_telegram.svg?react';
import Phone from './fluent_call-28-filled.svg?react';

export const Contacts = () => (
  <div>
    <a className={s.phone} href="+7(939)8391297">
      <Phone/>
      <span>+7 (939) 839 12 97</span>
    </a>
    <ul className={s.list}>
      <li className={s.item}>
        <a className={s.link} href="#" aria-label="Ссылка на группу в VK">
          <VkSvg/>
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#" aria-label="Ссылка на канал в Youtube">
          <YoutubeSvg/>
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#" aria-label="Ссылка на чат в Telegram">
          <TelegramSvg/>
        </a>
      </li>
    </ul>
  </div>
);
