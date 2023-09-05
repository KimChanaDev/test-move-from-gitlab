import { Player } from "../../GameFlow/Player.js";

export class PlayerDTO {
	constructor(
		private id: string,
		private username: string,
		private isReady: boolean,
		private isOwner: boolean
	) {}

	public static CreateFromPlayer(player: Player): PlayerDTO {
		return new PlayerDTO(player.id, player.username, player.isReady, player.isOwner);
	}
}