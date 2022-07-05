import NavItem from "./NavItem";

//icons heroicons
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col">
      <NavItem href="/" icon={<HomeIcon className="nav-icon" />} text="Home" />
      <NavItem
        href="/explore"
        icon={<HashtagIcon className="nav-icon" />}
        text="Explore"
      />
      <NavItem
        href="/notifications"
        icon={<BellIcon className="nav-icon" />}
        text="Notifications"
      />
      <NavItem
        href="/messages"
        icon={<MailIcon className="nav-icon" />}
        text="Messages"
      />
      <NavItem
        href="/bookmarks"
        icon={<BookmarkIcon className="nav-icon" />}
        text="Bookmarks"
      />
      <NavItem
        href="/lists"
        icon={<ClipboardListIcon className="nav-icon" />}
        text="Lists"
      />
      <NavItem
        href="/profile"
        icon={<UserIcon className="nav-icon" />}
        text="Profile"
      />
      <NavItem
        href="/more"
        icon={<DotsCircleHorizontalIcon className="nav-icon" />}
        text="More"
      />
    </nav>
  );
};

export default Nav;
