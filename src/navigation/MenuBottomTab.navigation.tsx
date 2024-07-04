import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {Slide03} from '../screns/Slide03';
import {Slide04} from '../screns/Slide04';
import { AntDesign } from '@expo/vector-icons';

type MenuTabParam = {
    Slide3: undefined
    Slide4: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide3">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs(){
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Slide3" component={Slide03}
            options={{
                tabBarIcon:() =>(
                    <AntDesign name="folderopen" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen name="Slide4" component={Slide04}
              options={{
                tabBarIcon: () => (
                    <AntDesign name="addfolder" size={24} color="black" />
                )
              }}
              />
        </Tab.Navigator>
    
    );
}