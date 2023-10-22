import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList, AppStackParamList} from '@routes';

import {AppTabBottomTabParamlist} from './AppTabNavigator';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamlist,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamlist, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;
