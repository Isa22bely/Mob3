import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Slide05 } from '../screns/Slide05'
import { Slide06 } from '../screns/Slide06'

type MenuDrawerParam = {
    Slide5: undefined
    Slide6: undefined
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide5">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}

export function MenuDrawer(){
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Slide5' component={Slide05}/>
            <Drawer.Screen name='Slide6' component={Slide06}/>
        </Drawer.Navigator>
    );
}