import { LightningElement, api } from 'lwc';

export default class RoomMeetings extends LightningElement {
    meetingRooms = [

        {roomName:'A-01', roomCapacity:'5' },
        {roomName:'A-02', roomCapacity:'12' },
        {roomName:'A-03', roomCapacity:'9' },
        {roomName:'B-01', roomCapacity:'2' },
        {roomName:'B-02', roomCapacity:'3' },
        {roomName:'B-03', roomCapacity:'4' },
        {roomName:'C-01', roomCapacity:'7' },
        {roomName:'C-02', roomCapacity:'5' },
        {roomName:'C-03', roomCapacity:'9' }
    ]


}