import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import profilePhoto from "../../assets/images/profile.jpg";
import { getTranslate, changeLang, lang } from "../../localization";
import { Button, Fade } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../../assets/CSS/index.css";
import MenuItem from "../../components/MenuItem/MenuItem";
import useStyles from "./styles/index.styles";
import ChangePage from "./ChangePage";
const translate = getTranslate();

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [changed, setChanged] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const setMobileOpenFalse = () => {
    setMobileOpen(false);
  };
  const setNewPage = (num) => {
    setPage(num);
  };
  useEffect(() => {
    setChanged((prev) => !prev);
    setTimeout(function () {
      setChanged((prev) => !prev);
    }, 300);
  }, [page]);

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img
          src={profilePhoto}
          alt="profilePhoto"
          className={classes.profileImage}
        />
      </div>
      <Divider />
      <div className={classes.mainDrawer}>
        <List className={classes.list}>
          <MenuItem
            mobileFunc={setMobileOpenFalse}
            pageFunc={() => setNewPage(0)}
            page={page}
            text={translate.home}
            num={0}
          />
          <MenuItem
            mobileFunc={setMobileOpenFalse}
            pageFunc={() => setNewPage(1)}
            page={page}
            text={translate.about}
            num={1}
          />
          <MenuItem
            mobileFunc={setMobileOpenFalse}
            pageFunc={() => setNewPage(2)}
            page={page}
            text={translate.resume}
            num={2}
          />
          <MenuItem
            mobileFunc={setMobileOpenFalse}
            pageFunc={() => setNewPage(3)}
            page={page}
            text={translate.portfolios}
            num={3}
          />
          <MenuItem
            mobileFunc={setMobileOpenFalse}
            pageFunc={() => setNewPage(4)}
            page={page}
            text={translate.contact}
            num={4}
          />
        </List>
      </div>
      <div className={classes.bottomDrawer}>
        <Button
          className={[
            classes.button,
            lang === "en" ? classes.inActiveButton : classes.activeButton,
          ].join(" ")}
          onClick={() => changeLang("en")}
          endIcon={lang === "fa" ? <LanguageIcon /> : undefined}
        >
          English
        </Button>
        <Button
          className={[
            classes.button,
            lang === "fa" ? classes.inActiveButton : classes.activeButton,
          ].join(" ")}
          onClick={() => changeLang("fa")}
          endIcon={lang === "en" ? <LanguageIcon /> : undefined}
          style={{
            fontFamily: "IRANSans",
            letterSpacing: 0,
          }}
        >
          فارسی
        </Button>
      </div>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={`${classes.menuButton} ${classes.menuIcon}`}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Fade
        in={changed}
        timeout={{
          appear: 500,
          enter: 300,
          exit: 0,
        }}
      >
        <main className={classes.content}>{ChangePage(page)}</main>
      </Fade>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
