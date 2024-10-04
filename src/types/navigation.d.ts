export type RootStackParamList = {
  BottomTabs: undefined;
  MovieDetailScreen: {id: number};
  Movies: undefined;
  Favorites: undefined;
  Booked: undefined;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'BottomTabs'
>;

export type RootNavigationProps = RootStackScreenProps['navigation'];
export type RootRouteProps<T extends keyof RootStackParamList> =
  StackScreenProps<T>['route'];
