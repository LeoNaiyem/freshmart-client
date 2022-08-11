import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List sx={{ padding: "4rem 0.5rem", background: "#133730", height: "100vh" }}>
        <Link to="/home">
          <ListItem sx={{ color: "lightgrey" }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "lightgrey" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText> Go Home</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/dashboard">
          <ListItem sx={{ color: "lightgrey" }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "lightgrey" }}>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText> Manage Product</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/dashboard/add-product">
          <ListItem sx={{ color: "lightgrey" }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "lightgrey" }}>
                <AddIcon />
              </ListItemIcon>
              <ListItemText> Add Product</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/dashboard/edit-product">
          <ListItem sx={{ color: "lightgrey" }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "lightgrey" }}>
                <EditIcon />
              </ListItemIcon>
              <ListItemText> Edit Product</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "white",
          color: "#133730",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ width: "100%", textAlign: "center", fontWeight: 600 }}
            variant="h5"
            noWrap
            component="div"
          >
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: '50px',
          p: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};
Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Dashboard;
