import { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import profilePhoto from "../../assets/images/profile.jpg";
import { getTranslate, changeLang, lang } from "../../localization";
import { Button } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import MenuItem from "../../components/MenuItem/MenuItem";
import useStyles from "./styles/index.styles";
import { Hidden } from "@mui/material";
const translate = getTranslate();

function ResponsiveDrawer() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
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
          <MenuItem text={translate.home} link="home" />
          <MenuItem text={translate.about} link="about" />
          <MenuItem text={translate.resume} link="resume" />
          <MenuItem text={translate.portfolios} link="portfolios" />
          <MenuItem text={translate.contact} link="contact" />
        </List>
      </div>
      <div className={classes.bottomDrawer}>
        <Button
          name="changeLangToEn"
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
          name="ChangeLanguageToPersian"
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
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        edge="start"
        onClick={handleDrawerToggle}
        className={`${classes.menuButton} ${classes.menuIcon}`}
        name="menuButton"
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
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
      {/* <Fade
        in={changed}
        timeout={{
          appear: 500,
          enter: 300,
          exit: 0,
        }}
      ></Fade> */}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
