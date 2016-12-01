import "material-design-icons/iconfont/material-icons.css";
import "material-design-icons/iconfont/MaterialIcons-Regular.ttf";
import "material-design-icons/iconfont/MaterialIcons-Regular.woff";
import "material-design-icons/iconfont/MaterialIcons-Regular.woff2";
import "material-design-lite";
import "material-design-lite/dist/material.indigo-pink.min.css";

import { Component, h, render } from "preact";
import { Button, Card, Icon, Layout, Navigation, TextField } from "preact-mdl";
import { Router } from "preact-router";

import "./main.css";

const React = { createElement: h };

// Our top-level component.
class App extends Component<{}, {}> {

    public render() {
        return (
            <div id="app">
                <SideLayout />
            </div>
        );
    }
}

class MaterialLayoutHelper {
    constructor(private layout: Layout) { }

    public toggleDrawer(): void {
        this.layout.base.MaterialLayout.toggleDrawer();
    }

    public get isSmallScreen(): boolean {
        return this.layout.base.classList.contains('is-small-screen');
    }

    public get hasFixedDrawer(): boolean {
        return this.layout.base.classList.contains('mdl-layout--fixed-drawer');
    }
}

class SideLayout extends Component<{}, {}> {

    public render() {
        return (
            <Layout fixed-header fixed-drawer>
                <Header onSearch={() => { return; } } />
                <Sidebar onDrawerClick={this.toggleDrawer} />

                <Button id="fab" fab colored onClick={this.handleFab}>
                    <Icon icon="create" />
                </Button>

                <Layout.Content>
                    <Router>
                        <Home path="/" default />
                        <Profile path="/profile" id="me" />
                        <Profile path="/profile/:id" id="" />
                    </Router>
                </Layout.Content>
            </Layout>);
    }

    private toggleDrawer = () => {
        let layout = new MaterialLayoutHelper(this);
        if (layout.hasFixedDrawer && !layout.isSmallScreen) {
            return;
        }
        layout.toggleDrawer();
    }

    private handleFab = () => {
        alert('You clicked New!');
    }
}

const Header = ({ onSearch }) => (
    <Layout.Header>
        <Layout.HeaderRow>
            <Layout.Title>
                <a href="/">Example</a>
            </Layout.Title>
            <Layout.Spacer />
            <TextField
                placeholder="Search"
                type="search"
                onSearch={onSearch}
                style="background-color:#FFF; color:#000; padding:10px;"
                />
        </Layout.HeaderRow>
    </Layout.Header>
);

class Sidebar extends Component<{ onDrawerClick }, {}> {
    public shouldComponentUpdate() {
        return false;
    }

    public render({ onDrawerClick }) {
        return (
            <Layout.Drawer onClick={onDrawerClick}>
                <Layout.Title>Example App</Layout.Title>
                <Navigation>
                    <Navigation.Link href="/">Home</Navigation.Link>
                    <Navigation.Link href="/profile">Profile</Navigation.Link>
                    <Navigation.Link href="/profile/john">John</Navigation.Link>
                </Navigation>
            </Layout.Drawer>
        );
    }
}

interface IRouterProps extends JSX.HTMLAttributes {
    default?: boolean;
    path: string;
}

class Home extends Component<IRouterProps, {}> {
    public shouldComponentUpdate() {
        return false;
    }

    public render() {
        return (
            <Card shadow={4}>
                <Card.Title class="graphic">
                    <Card.TitleText>Home</Card.TitleText>
                </Card.Title>
                <Card.Text style="text-align:center">
                    <Icon icon="person" style="display:block; font-size:100px;" />
                    <p>Nothing to see here.</p>
                </Card.Text>
                <Card.Actions style="text-align:right">
                    <Button primary>Click Me</Button>
                </Card.Actions>
            </Card>
        );
    }
}

class Profile extends Component<{ id } & IRouterProps, {}> {
    public shouldComponentUpdate({id}) {
        return id !== this.props.id;
    }

    public render({id}) {
        return (
            <div class="profile">
                <Card shadow={3} class="wide">
                    <Card.Title class="graphic">
                        <Card.TitleText>User: {id}</Card.TitleText>
                    </Card.Title>

                    <Card.Text>
                        <p>This is a profile for the user {id}.</p>
                    </Card.Text>
                </Card>
            </div>
        );
    }
}

render(<App />, document.body);
