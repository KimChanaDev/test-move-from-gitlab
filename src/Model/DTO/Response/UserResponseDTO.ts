import { PlayerLogic } from "../../../GameLogic/Player/PlayerLogic.js";
import { Document, Types } from 'mongoose';
import { UserDocument } from "../../Entity/UserEntity.js";
export class UserResponseDTO
{
	constructor(private id: string, private username: string) {}

	public static CreateFromUserDocument(
		savedUser: Document<unknown, {}, UserDocument> & UserDocument & {
			_id: Types.ObjectId;
		}
	): UserResponseDTO
    {
		return new UserResponseDTO(savedUser.id, savedUser.username);
	}

    public static CreateFromPlayer(player: PlayerLogic): UserResponseDTO
    {
		return new UserResponseDTO(player.id, player.username);
	}
}