import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from "./Principal";
import Consulta from "./Consulta";
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator();


export default function Tabs(){

    const screenOptions = {
        tabBarStyle:{
            backgroundColor:"#002851"
        },
        tabBarActiveTintColor:"#339cff",
        tabBarInactiveTintColor:"#fff"
    }

    const tabs = [
        {   id: 1,
            name: "Principal",
            icon: "home",
            component: Principal
        },
        {
            id: 2,
            name: "Consulta",
            icon: "calendar",
            component: Consulta
        },
        {
            id: 3,
            name: "Explorar",
            icon: "search",
            component: Explorar
        },
        {
            id: 4,
            name: "Perfil",
            icon: "person",
            component: Perfil
        }

    ]

    return(
        <Tab.Navigator   screenOptions={screenOptions} >
            {tabs.map((tab) =>( 
                    
                    <Tab.Screen name={tab.name} component={tab.component}
                    key={tab.id}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color,size}) => (
                            <Ionicons name={tab.icon}
                            color={color}
                            size={size}
                            />
                        )
                    }}/>
            ))}
            
            
           
         
        </Tab.Navigator>
    )
}