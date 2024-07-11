import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { Slide01} from '../screns/Slide01';
import { Slide02 } from '../screns/Slide02';
import { Slide03 } from '../screns/Slide03';
import { MenuTabs } from './MenuBottomTab.navigation';
import { MenuDrawer } from './MenuDrawer.navigation';

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
    Tab: undefined
    Drawer: undefined
    
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide1" component={Slide01} />
            <Stack.Screen name="Slide2" component={Slide02} />
            <Stack.Screen name="Tab" component={MenuTabs} />
            <Stack.Screen name="Drawer" component={MenuDrawer}/>
        </Stack.Navigator>
    );
}