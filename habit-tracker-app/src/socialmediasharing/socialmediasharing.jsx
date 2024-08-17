import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './socialmediasharing.css';
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
} from "react-share";

function SocialMediaSharing() {
  return (
    <div className="socialmediasharing-app">
      <h1>Share on social media</h1>
      <br></br>
    <FacebookShareButton url={"http://localhost:3000/"}>
      <FacebookIcon size={40} round={true} />
    </FacebookShareButton>
    <FacebookMessengerShareButton url={"http://localhost:3000/"}>
      <FacebookMessengerIcon size={40} round={true} />
    </FacebookMessengerShareButton>
    <TwitterShareButton url={"http://localhost:3000/"}>
      <TwitterIcon size={40} round={true} />
    </TwitterShareButton>
    <RedditShareButton url={"http://localhost:3000/"}>
      <RedditIcon size={40} round={true} />
    </RedditShareButton>
    <LinkedinShareButton url={"http://localhost:3000/"}>
      <LinkedinIcon size={40} round={true} />
    </LinkedinShareButton>
    <TumblrShareButton url={"http://localhost:3000/"}>
      <TumblrIcon size={40} round={true} />
    </TumblrShareButton>
    <WhatsappShareButton url={"http://localhost:3000/"}>
      <WhatsappIcon size={40} round={true} />
    </WhatsappShareButton>
    <TelegramShareButton url={"http://localhost:3000/"}>
      <TelegramIcon size={40} round={true} />
    </TelegramShareButton>
    <EmailShareButton>
      <EmailIcon size={40} round={true} />
    </EmailShareButton>
    </div>
      )};

export default SocialMediaSharing;