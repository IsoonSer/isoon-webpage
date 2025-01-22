export interface EachCardProperties {
    duration: string,
    event: string,
    images: string[],
    descriptions: string[]

}

export interface TopicCardProperties {
    topicName: string,
    cardData: EachCardProperties[]

}