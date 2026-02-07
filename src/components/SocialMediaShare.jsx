import React from "react";

import { WhatsappShareButton, TelegramShareButton, FacebookMessengerShareButton, EmailShareButton} from "react-share";

import { WhatsappIcon, TelegramIcon, FacebookMessengerIcon, EmailIcon } from "react-share";

export default function SocialMediaShare ({ url, content }) {

    return (

        <div className="flex flex-col items-center justify-center gap-4">

            <p className="text-[11px] text-slate-500 p-4 rounded-full border">share across social media</p>

            <div className="flex flex-row items-center gap-4">

                <WhatsappShareButton url={url} title={content} separator=" " >
                    <WhatsappIcon size={45} className="rounded-lg"/>
                </WhatsappShareButton>

                <TelegramShareButton url={url} title={content}>
                    <TelegramIcon size={45} className="rounded-lg"/>
                </TelegramShareButton>

                <FacebookMessengerShareButton url={url} title={content} appId="1149136977294432">
                    <FacebookMessengerIcon size={45} className="rounded-lg"/>
                </FacebookMessengerShareButton>

                <EmailShareButton url={url} title={content}>
                    <EmailIcon size={45} className="rounded-lg"/>
                </EmailShareButton>
            </div>

        </div>
    );
};