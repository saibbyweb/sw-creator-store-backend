import {
  CommunicationMode,
  CommunicationProvider,
  CommunicationStatus,
  CommunicationType,
  SendMode,
} from 'src/---generated---';

export class CreateCommunicationLogInput {
  recipient: string;
  content?: Record<string, any>;
  status: CommunicationStatus;
  mode: CommunicationMode;
  sendMode: SendMode;
  type: CommunicationType;
  provider: CommunicationProvider;
}
