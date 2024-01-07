import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

export default function SharePost({ postUrl }) {
  const emailSubject = "I wanted you to see this site";
  const emailBody = `Check out this site: ${postUrl}`;

  return (
    <div className="flex gap-2 items-center ">
      <h3 className="my-2 font-bold">Share: </h3>
      <div className=" text-bold flex gap-5 text-2xl">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${postUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(
            emailSubject
          )}&body=${encodeURIComponent(emailBody)}`}
        >
          <Mail />
        </a>
        {/* <a
          href={`https://api.whatsapp.com/send?text=${postUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a> */}
      </div>
    </div>
  );
}
