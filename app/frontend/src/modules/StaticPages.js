import React from "react";
import AboutContent from "AboutContent";
import CollegiumContent from "CollegiumContent";
import BoardContent from "BoardContent";
import ForAuthorsContent from "ForAuthorsContent";
import EventsContent from "EventsContent";
import IssueContent from "IssueContent";
import PolicyContent from "PolicyContent";

const staticPages = [
  {
    componentName: "AboutPage",
    linkText: "О журнале",
    pageTitle: "О журнале",
    href: "/about",
    content: <AboutContent />
  },

  {
    componentName: "CollegiumPage",
    linkText: "Ред. коллегия",
    pageTitle: "Редакционная коллегия",
    href: "/collegium",
    content: <CollegiumContent />
  },

  {
    componentName: "BoardPage",
    linkText: "Ред. совет",
    pageTitle: "Редакционный совет",
    href: "/board",
    content: <BoardContent />
  },

  {
    componentName: "ForAuthorsPage",
    linkText: "Авторам",
    pageTitle: "Авторам",
    href: "/for-authors",
    content: <ForAuthorsContent />
  },

  {
    componentName: "EventsPage",
    linkText: "События и новости",
    pageTitle: "События и новости",
    href: "/events",
    content: <EventsContent />
  },

  {
    componentName: "IssuePage",
    linkText: "В номере",
    pageTitle: "В номере",
    href: "/issue",
    content: <IssueContent />
  },

  {
    componentName: "PolicyPage",
    linkText: "Редакционная политика",
    pageTitle: "Редакционная политика",
    href: "/policy",
    content: <PolicyContent />,
    hideOnMenu: true
  }
];

export default staticPages;
