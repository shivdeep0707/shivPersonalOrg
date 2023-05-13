import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'AA-01', roomCapacity:'1112' };


}