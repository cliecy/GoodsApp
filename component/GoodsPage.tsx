import * as React from "react";
import { Avatar } from '@rneui/themed';
import { ListItem } from '@rneui/themed';
import {Text} from "react-native";
import { TouchableHighlight } from "react-native";

export default () => {
    return (
        <ListItem
            Component={TouchableHighlight}
            containerStyle={{}}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onLongPress()")}
            pad={20}
        >
            <Avatar
                source={{
                    uri:
                        "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
                }}
            />
            <ListItem.Content>
                <ListItem.Title>
                    <Text>Pranshu Chittora</Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                    <Text>React Native Elements</Text>
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}