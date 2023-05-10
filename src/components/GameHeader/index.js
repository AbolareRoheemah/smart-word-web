import React from 'react';
import './gameheader.css';
import { NavLink } from 'react-router-dom';

export default function GameHeader() {
  return (
    <div className='header-ctn'>
        <div className="logo-ctn">
            <img src="../../assets/images/pngs/smart-word-logo.png" alt="Logo" />
        </div>
        <div className="links-ctn">
            <NavLink to="/game">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.985 8.62668C16.2394 5.25555 15.1172 3.45625 13.4525 2.96477C13.1026 2.86213 12.7397 2.81085 12.375 2.81254C11.893 2.81254 11.4733 2.92996 11.0292 3.05442C10.4942 3.20453 9.8863 3.37504 9.00001 3.37504C8.11372 3.37504 7.50552 3.20488 6.96938 3.05477C6.52501 2.92996 6.1056 2.81254 5.62501 2.81254C5.24793 2.81123 4.87251 2.86235 4.5095 2.96442C2.85364 3.45379 1.73216 5.25238 0.975597 8.62457C0.162082 12.2534 0.562511 14.5445 2.09849 15.0761C2.30903 15.1503 2.53056 15.1886 2.7538 15.1893C3.80603 15.1893 4.64978 14.3129 5.22634 13.5953C5.87778 12.7832 6.64032 12.3712 9.00001 12.3712C11.1076 12.3712 11.9799 12.657 12.7333 13.5953C13.2068 14.1852 13.6543 14.598 14.1008 14.8578C14.6946 15.203 15.2881 15.2796 15.8643 15.0817C16.772 14.772 17.2923 13.9532 17.4111 12.6475C17.5015 11.6463 17.3623 10.3311 16.985 8.62668ZM7.31251 8.43754H6.18751V9.56254C6.18751 9.71172 6.12825 9.8548 6.02276 9.96029C5.91727 10.0658 5.77419 10.125 5.62501 10.125C5.47583 10.125 5.33275 10.0658 5.22726 9.96029C5.12177 9.8548 5.06251 9.71172 5.06251 9.56254V8.43754H3.93751C3.78833 8.43754 3.64525 8.37828 3.53976 8.27279C3.43427 8.1673 3.37501 8.02422 3.37501 7.87504C3.37501 7.72586 3.43427 7.58278 3.53976 7.47729C3.64525 7.3718 3.78833 7.31254 3.93751 7.31254H5.06251V6.18754C5.06251 6.03836 5.12177 5.89528 5.22726 5.78979C5.33275 5.6843 5.47583 5.62504 5.62501 5.62504C5.77419 5.62504 5.91727 5.6843 6.02276 5.78979C6.12825 5.89528 6.18751 6.03836 6.18751 6.18754V7.31254H7.31251C7.46169 7.31254 7.60477 7.3718 7.71026 7.47729C7.81575 7.58278 7.87501 7.72586 7.87501 7.87504C7.87501 8.02422 7.81575 8.1673 7.71026 8.27279C7.60477 8.37828 7.46169 8.43754 7.31251 8.43754ZM10.2656 8.57816C10.1266 8.57816 9.99063 8.53693 9.875 8.45967C9.75937 8.38241 9.66925 8.27259 9.61603 8.14411C9.56281 8.01563 9.54889 7.87426 9.57602 7.73787C9.60315 7.60147 9.67012 7.47619 9.76845 7.37786C9.86678 7.27952 9.99207 7.21256 10.1285 7.18543C10.2649 7.1583 10.4062 7.17222 10.5347 7.22544C10.6632 7.27866 10.773 7.36878 10.8503 7.4844C10.9275 7.60003 10.9688 7.73597 10.9688 7.87504C10.9688 8.06152 10.8947 8.24036 10.7628 8.37222C10.631 8.50409 10.4521 8.57816 10.2656 8.57816ZM11.8125 10.125C11.6734 10.125 11.5374 10.0838 11.4217 10.0064C11.306 9.92908 11.2159 9.81916 11.1627 9.69058C11.1096 9.562 11.0958 9.42053 11.123 9.28409C11.1503 9.14765 11.2174 9.02237 11.3159 8.92411C11.4145 8.82584 11.5399 8.75902 11.6764 8.73209C11.8129 8.70515 11.9544 8.71933 12.0828 8.77282C12.2113 8.82631 12.3209 8.9167 12.398 9.03256C12.475 9.14842 12.516 9.28453 12.5156 9.42367C12.5152 9.60985 12.4409 9.78824 12.3091 9.91972C12.1773 10.0512 11.9987 10.125 11.8125 10.125ZM11.8125 7.03129C11.6734 7.03129 11.5375 6.99005 11.4219 6.91279C11.3062 6.83553 11.2161 6.72572 11.1629 6.59724C11.1097 6.46876 11.0958 6.32738 11.1229 6.19099C11.15 6.0546 11.217 5.92931 11.3153 5.83098C11.4137 5.73265 11.5389 5.66568 11.6753 5.63855C11.8117 5.61142 11.9531 5.62534 12.0816 5.67856C12.2101 5.73178 12.3199 5.8219 12.3971 5.93753C12.4744 6.05316 12.5156 6.1891 12.5156 6.32817C12.5156 6.51465 12.4416 6.69349 12.3097 6.82535C12.1778 6.95721 11.999 7.03129 11.8125 7.03129ZM13.3594 8.57816C13.2203 8.57816 13.0844 8.53693 12.9687 8.45967C12.8531 8.38241 12.763 8.27259 12.7098 8.14411C12.6566 8.01563 12.6426 7.87426 12.6698 7.73787C12.6969 7.60147 12.7639 7.47619 12.8622 7.37786C12.9605 7.27952 13.0858 7.21256 13.2222 7.18543C13.3586 7.1583 13.5 7.17222 13.6285 7.22544C13.7569 7.27866 13.8668 7.36878 13.944 7.4844C14.0213 7.60003 14.0625 7.73597 14.0625 7.87504C14.0625 8.06152 13.9884 8.24036 13.8566 8.37222C13.7247 8.50409 13.5459 8.57816 13.3594 8.57816Z" fill="#B4B7BB"/>
            </svg>
            <p className="link-tags">
                Game
            </p>
            </NavLink>
            <NavLink to="/">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.875 15.75H2.25C1.8375 15.75 1.5 15.4125 1.5 15V7.5C1.5 7.0875 1.8375 6.75 2.25 6.75H4.875C5.2875 6.75 5.625 7.0875 5.625 7.5V15C5.625 15.4125 5.2875 15.75 4.875 15.75ZM10.3125 2.25H7.6875C7.275 2.25 6.9375 2.5875 6.9375 3V15C6.9375 15.4125 7.275 15.75 7.6875 15.75H10.3125C10.725 15.75 11.0625 15.4125 11.0625 15V3C11.0625 2.5875 10.725 2.25 10.3125 2.25ZM15.75 8.25H13.125C12.7125 8.25 12.375 8.5875 12.375 9V15C12.375 15.4125 12.7125 15.75 13.125 15.75H15.75C16.1625 15.75 16.5 15.4125 16.5 15V9C16.5 8.5875 16.1625 8.25 15.75 8.25Z" fill="#B4B7BB"/>
            </svg>
                <p className="link-tags">Statistics</p>
            </NavLink>
            <NavLink to="/">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.25C6 4.45435 6.31607 3.69129 6.87868 3.12868C7.44129 2.56607 8.20435 2.25 9 2.25C9.79565 2.25 10.5587 2.56607 11.1213 3.12868C11.6839 3.69129 12 4.45435 12 5.25C12 6.04565 11.6839 6.80871 11.1213 7.37132C10.5587 7.93393 9.79565 8.25 9 8.25C8.20435 8.25 7.44129 7.93393 6.87868 7.37132C6.31607 6.80871 6 6.04565 6 5.25ZM6 9.75C5.00544 9.75 4.05161 10.1451 3.34835 10.8483C2.64509 11.5516 2.25 12.5054 2.25 13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5C15.75 12.5054 15.3549 11.5516 14.6517 10.8483C13.9484 10.1451 12.9946 9.75 12 9.75H6Z" fill="#B4B7BB"/>
            </svg>
                <p className="link-tags">Profile</p>
            </NavLink>
            <NavLink to="/">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 9.165C15.75 5.0475 12.555 2.25 9 2.25C5.4825 2.25 2.25 4.9875 2.25 9.21C1.8 9.465 1.5 9.945 1.5 10.5V12C1.5 12.825 2.175 13.5 3 13.5H3.75V8.925C3.75 6.0225 6.0975 3.675 9 3.675C11.9025 3.675 14.25 6.0225 14.25 8.925V14.25H8.25V15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V13.335C16.1925 13.1025 16.5 12.645 16.5 12.105V10.38C16.5 9.855 16.1925 9.3975 15.75 9.165Z" fill="#B4B7BB"/>
            <path d="M6.75 10.5C7.16421 10.5 7.5 10.1642 7.5 9.75C7.5 9.33579 7.16421 9 6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5Z" fill="#B4B7BB"/>
            <path d="M11.25 10.5C11.6642 10.5 12 10.1642 12 9.75C12 9.33579 11.6642 9 11.25 9C10.8358 9 10.5 9.33579 10.5 9.75C10.5 10.1642 10.8358 10.5 11.25 10.5Z" fill="#B4B7BB"/>
            <path d="M13.4999 8.2725C13.321 7.2181 12.7749 6.26097 11.9582 5.57054C11.1415 4.8801 10.1068 4.50088 9.03735 4.5C6.76485 4.5 4.31985 6.3825 4.51485 9.3375C5.43971 8.95904 6.25654 8.35761 6.89253 7.58684C7.52852 6.81606 7.9639 5.89989 8.15985 4.92C9.14235 6.8925 11.1599 8.25 13.4999 8.2725Z" fill="#B4B7BB"/>
            </svg>
                <p className="link-tags">Support</p>
            </NavLink>
        </div>
        <div className="tn-div">
            <div className="username">
                <p>Username</p>
                <p>ob5nn....7fgtxy</p>
            </div>
        </div>
    </div>
  )
}