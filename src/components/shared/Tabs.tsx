import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

interface TabsProps {
    tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPress = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                {
                    tabs.map((tab, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleTabPress(index)}
                            style={[
                                {
                                    flex: 1,
                                    alignItems: 'center',
                                    // borderWidth: 1,
                                    // borderColor: 'rgba(0, 128, 128, 0.25)',
                                    paddingVertical: 7.5,
                                    borderRadius: 100,
                                },
                                activeTab === index && {
                                    flex: 1,
                                    backgroundColor: "rgba(0, 128, 128, 0.25)",
                                }
                            ]}
                        >
                            <Text style={{
                                color: 'rgba(0, 128, 128, 0.75)',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textTransform: 'capitalize',
                            }}>
                                {tab}
                            </Text>
                        </Pressable>
                    ))
                }
            </View>
        </>
    );
};

export default Tabs;

