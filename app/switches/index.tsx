import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const Switches = () => {

  const [state, setState] = useState({
      isActive: true,
      isHungry: false,
      isHappy: true,
  });

  return (
    <ThemedView margin>
      <ThemeCard>
      {/* <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({...state, isActive: value})}
          value={state.isActive}
      /> */}
        <ThemedSwitch text='Activo' value={state.isActive} onValueChange={(value) => setState({...state, isActive: value})} className='mb-6'/>
        <ThemedSwitch text='Hambriento' value={state.isHungry} onValueChange={(value) => setState({...state, isHungry: value})} className='mb-6'/>
        <ThemedSwitch text='Feliz' value={state.isHappy} onValueChange={(value) => setState({...state, isHappy: value})} className='mb-2'/>
      </ThemeCard>


    </ThemedView>
  );
};
export default Switches;
