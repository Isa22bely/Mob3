import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MenuStack } from './MenuStack.navigation';
import { MenuTabs } from './MenuBottomTab.navigation'

export  function Navigation(){
    return(
        <NavigationContainer>
            <MenuStack/>
        </NavigationContainer>
    );
}