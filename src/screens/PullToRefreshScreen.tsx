import React, {useContext} from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets()
  const { theme: {colors, dark} } = useContext(ThemeContext)

  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>()

  const onRefresh = () => {
    setRefreshing(true); 
    setTimeout(()=> {
      console.log('Terminamos');
      setRefreshing(false);
      setData('hola mundo')
    }, 3500)
  }

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor= {colors.primary}  //android  
          colors={['white']}  //android
          // style={{backgroundColor: '#5856d6' }}  //IOS
          tintColor={dark ? 'white' : 'black'}  //IOS
          // title='Refreshing' 
          //titleColor='white'
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to refresh'/>
        {
          data && <HeaderTitle title={data}/>
        }
      </View>
    </ScrollView>
  )
}
