import React, { useMemo } from "react";
import DropDown from "../atomicComponents/dropdown";
import PrimaryButton from "../atomicComponents/buttons/primary";
import HamIconSVG from "../../assets/hamIcon.svg";
import AppLogoSVG from "../../assets/appLogo.svg";
import TicketSVG from "../../assets/ticket.svg";
import UserSVG from "../../assets/user.svg";
import './style.css';

const AppHeader = () => {
  return (
    <header className="headerRoot">
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="headerMainNavWrapper">
            <div className="headerLogo">
              <a className="logoLink" href="/">
                <div className="logo_svg__XZKEd">
                  <img src={AppLogoSVG} alt="Logo"/>
                </div>
              </a>
            </div>
            <nav aria-label="Main Navigation" className="headerMainNav">
              <ul className="headerMainNavItems">
                <li>
                  <a
                    className="headerMainNavLinks"
                    data-e2e="main-nav-Drops-link"
                    href="/drops"
                  >
                    Drops
                  </a>
                </li>
                <li>
                  <a
                    className="headerMainNavLinks app-header_mainNavLinkActive__MyECl"
                    data-e2e="main-nav-Marketplace-link"
                    href="/marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    className="headerMainNavLinks"
                    data-e2e="main-nav-My Collection-link"
                    href="/my/collections"
                  >
                    My Collection
                  </a>
                </li>
                <li>
                  <a
                    className="headerMainNavLinks"
                    data-e2e="main-nav-Challenges-link"
                    href="/challenges"
                  >
                    Challenges
                  </a>
                </li>
                <li>
                  <a
                    className="headerMainNavLinks"
                    data-e2e="main-nav-FIFA+-link"
                    target="_blank"
                    href="https://www.fifa.com/fifaplus"
                  >
                    FIFA+
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="accountActions">
            <a
              className="accountHeaderTicketActions headerTicket"
              href="https://fifa.com/tickets"
            >
              <img src={TicketSVG} alt="ticketIcon" />
            </a>
            <DropDown 
                values={useMemo(()=>['English', 'French', 'Germany'],[])}
            />
            <button
              className="buttonPlain"
              type="button"
              data-e2e="main-nav-signin-link"
            >
              <span className="button_textWrapper__v9u0E">Sign in</span>
            </button>
            <PrimaryButton 
                buttonText="Join Now"
            />
            
          </div>
        </div>
      </div>
      <div className="headerMobile">
        <img src= {HamIconSVG} alt="icon" style={{width: '24px'}}/>
        <img src={AppLogoSVG} alt="icon" />
        <img src={UserSVG} alt="icon" style={{width: '24px'}}/>
      </div>
    </header>
  );
};

export default AppHeader;