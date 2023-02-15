"use strict";

const root = document.getElementById("root");

const socialMap = new Map();
socialMap.set("www.instagram.com", "fa-brands fa-instagram");
socialMap.set("twitter.com", "fa-brands fa-twitter");
socialMap.set("www.facebook.com", "fa-brands fa-facebook-f");

const user = {
  id: 1,
  firstName: "Jason",
  lastName: "Statham",
  profilePicture:
    "https://i.pinimg.com/orignals/24/f5/f8/24f5f8ef9f8af9c7e795ff0ba15f6881.jpg",
  contacts: [
    "https://www.facebook.com/JasonStatham/",
    "https://twitter.com/realjstatham",
    "https://www.instagram.com/jasonstatham/?hl=ru",
  ],
};
const arrLinks = user.contacts.map((path) => {
  const { hostname } = new URL(path);
  return createElement("a", {
    attributes: { href: path, target: "_blank" },
    classNames: socialMap.get(hostname).split(" "),
    styles: { fontSize: "50px", color: 'white', backgroundColor: 'pink' },
  });
});

const elem = createElement("ul", {}, ...arrLinks);

root.append(elem);
