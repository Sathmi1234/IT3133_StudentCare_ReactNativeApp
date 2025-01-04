import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const ProfileRoute = () => <Text>Profile</Text>;

const CoursesRoute = () => <Text>Courses</Text>;

const SubjectsRoute = () => <Text>Subjects</Text>;

export default function Main({route}){
    console.log(route.params)
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
    { key: 'courses', title: 'Courses', focusedIcon: 'school' , unfocusedIcon: 'school-outline'},
    { key: 'subjects', title: 'Subjects', focusedIcon: 'book-open' , unfocusedIcon: 'book-open-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    courses: CoursesRoute,
    subjects: SubjectsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

