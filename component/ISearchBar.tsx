import * as React from 'react';
import {SearchBar} from '@rneui/base';

export default () => {
  const [value, setValue] = React.useState('');
  const onCancel = () => {
    setValue('');
    return 'Canceled';
  };
  return (
    <SearchBar
      platform="ios"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      placeholder="寻找你想要的..."
      placeholderTextColor="#888"
      cancelButtonTitle="取消"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
};
