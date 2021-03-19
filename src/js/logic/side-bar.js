const sideBarBlock = document.querySelector(`.side-bar`);
const btnNavigation = sideBarBlock.querySelector(`.btn-nav`);
const logoImg = sideBarBlock.querySelector(`.logo-block__link-img`);
const logoText = sideBarBlock.querySelector(`.logo-block__link-text`);
const menuIcon = sideBarBlock.querySelectorAll(`.menu-list__icon`);
const menuText = sideBarBlock.querySelectorAll(`.menu-list__text`);
const pageLayout = document.querySelector(`.page-layout`);

const elementsSideBar = [logoImg, logoText, ...menuIcon, ...menuText];

const onActiveBtnClick = () => {
  sideBarBlock.classList.add(`side-bar--active`);

  elementsSideBar.forEach(element => {
    element.classList.add(`block--active`);
  });
  pageLayout.classList.add(`page-layout-padding`);
  btnNavigation.classList.add(`block-btn-close`);

  btnNavigation.removeEventListener('click', onActiveBtnClick);
  btnNavigation.addEventListener('click', onDisableBtnClick);
};

const onDisableBtnClick = () => {
  sideBarBlock.classList.remove(`side-bar--active`);
  elementsSideBar.forEach(element => {
    element.classList.remove(`block--active`);
  });
  pageLayout.classList.remove(`page-layout-padding`);
  btnNavigation.classList.remove(`block-btn-close`);

  btnNavigation.removeEventListener('click', onDisableBtnClick);
  btnNavigation.addEventListener('click', onActiveBtnClick);
};

btnNavigation.addEventListener('click', onActiveBtnClick);