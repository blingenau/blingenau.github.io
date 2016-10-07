/// <reference path="../typings/ChangeLinr.d.ts" />
/// <reference path="../typings/StringFilr.d.ts" />
/// <reference path="../typings/MapScreenr.d.ts" />
/// <reference path="../typings/ItemsHoldr.d.ts" />
/// <reference path="../typings/BattleMovr.d.ts" />
/// <reference path="../typings/DeviceLayr.d.ts" />
/// <reference path="../typings/EightBittr.d.ts" />
/// <reference path="../typings/AudioPlayr.d.ts" />
/// <reference path="../typings/FPSAnalyzr.d.ts" />
/// <reference path="../typings/GamesRunnr.d.ts" />
/// <reference path="../typings/GroupHoldr.d.ts" />
/// <reference path="../typings/InputWritr.d.ts" />
/// <reference path="../typings/LevelEditr.d.ts" />
/// <reference path="../typings/MapsCreatr.d.ts" />
/// <reference path="../typings/MathDecidr.d.ts" />
/// <reference path="../typings/ModAttachr.d.ts" />
/// <reference path="../typings/NumberMakr.d.ts" />
/// <reference path="../typings/ObjectMakr.d.ts" />
/// <reference path="../typings/QuadsKeepr.d.ts" />
/// <reference path="../typings/AreaSpawnr.d.ts" />
/// <reference path="../typings/PixelRendr.d.ts" />
/// <reference path="../typings/PixelDrawr.d.ts" />
/// <reference path="../typings/ScenePlayr.d.ts" />
/// <reference path="../typings/StateHoldr.d.ts" />
/// <reference path="../typings/ThingHittr.d.ts" />
/// <reference path="../typings/TimeHandlr.d.ts" />
/// <reference path="../typings/TouchPassr.d.ts" />
/// <reference path="../typings/WorldSeedr.d.ts" />
/// <reference path="../typings/GameStartr.d.ts" />
/// <reference path="../typings/MenuGraphr.d.ts" />
/// <reference path="../typings/UserWrappr.d.ts" />
/// <reference path="../typings/js-beautify.d.ts" />
declare namespace FullScreenPokemon.Settings.MapsLibrary {
    const PalletTown: IMapRaw;
    const PewterCity: IMapRaw;
    const Route1: IMapRaw;
    const Route2: IMapRaw;
    const Route21: IMapRaw;
    const Route22: IMapRaw;
    const ViridianCity: IMapRaw;
    const ViridianForest: IMapRaw;
}
declare namespace FullScreenPokemon.Settings {
    function GenerateAudioSettings(): GameStartr.IAudioPlayrCustoms;
    function GenerateBattlesSettings(): IBattleMovrCustoms;
    function GenerateCollisionsSettings(): GameStartr.IThingHittrCustoms;
    function GenerateDevicesSettings(): GameStartr.IDeviceLayrCustoms;
    function GenerateEditorSettings(): ILevelEditrCustoms;
    function GenerateEventsSettings(): GameStartr.ITimeHandlrCustoms;
    function GenerateGeneratorSettings(): GameStartr.IWorldSeedrCustoms;
    function GenerateGroupsSettings(): GameStartr.IGroupHoldrCustoms;
    function GenerateInputSettings(): GameStartr.IInputWritrCustoms;
    function GenerateItemsSettings(): GameStartr.IItemsHoldrCustoms;
    function GenerateMapsSettings(): IMapCustoms;
    function GenerateMathSettings(): IMathDecidrCustoms;
    function GenerateMenusSettings(): IMenuGraphrCustoms;
    function GenerateModsSettings(): GameStartr.IModAttachrCustoms;
    function GenerateObjectsSettings(): GameStartr.IObjectMakrCustoms;
    function GenerateQuadrantsSettings(): GameStartr.IQuadsKeeprCustoms;
    function GenerateRendererSettings(): GameStartr.IPixelDrawrCustoms;
    function GenerateRunnerSettings(): GameStartr.IGamesRunnrCustoms;
    function GenerateScenesSettings(): GameStartr.IScenePlayrCustoms;
    function GenerateSpritesSettings(): GameStartr.IPixelRendrCustoms;
    function GenerateStateSettings(): IStateHoldrCustoms;
    function GenerateUISettings(): IUserWrapprCustoms;
}
declare namespace FullScreenPokemon {
    /**
     * Animation functions used by FullScreenPokemon instances.
     */
    class Animations<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Spawning callback for Characters. Sight and roaming are accounted for.
         *
         * @param thing   A newly placed Character.
         */
        spawnCharacter(thing: ICharacter): void;
        /**
         * Activates a WindowDetector by immediately starting its cycle of
         * checking whether it's in-frame to activate.
         *
         * @param thing   A newly placed WindowDetector.
         */
        spawnWindowDetector(thing: IDetector): void;
        /**
         * Snaps a moving Thing to a predictable grid position.
         *
         * @param thing   A Thing to snap the position of.
         */
        animateSnapToGrid(thing: IThing): void;
        /**
         * Freezes a Character to start a dialog.
         *
         * @param thing   A Character to freeze.
         */
        animatePlayerDialogFreeze(thing: ICharacter): void;
        /**
         * Gradually changes a numeric attribute over time.
         *
         * @param thing   A Thing whose attribute is to change.
         * @param attribute   The name of the attribute to change.
         * @param change   How much to change the attribute each tick.
         * @param goal   A final value for the attribute to stop at.
         * @param speed   How many ticks between changes.
         * @param onCompletion   A callback for when the attribute reaches the goal.
         * @returns The in-progress TimeEvent.
         */
        animateFadeAttribute(thing: IThing, attribute: string, change: number, goal: number, speed: number, onCompletion?: (thing: IThing) => void): TimeHandlr.ITimeEvent;
        /**
         * Slides a Thing across the screen horizontally over time.
         *
         * @param thing   A Thing to slide across the screen.
         * @param change   How far to move each tick.
         * @param goal   A midX location to stop sliding at.
         * @param speed   How many ticks between movements.
         * @param onCompletion   A callback for when the Thing reaches the goal.
         * @returns The in-progress TimeEvent.
         */
        animateSlideHorizontal(thing: IThing, change: number, goal: number, speed: number, onCompletion?: (thing: IThing) => void): void;
        /**
         * Slides a Thing across the screen vertically over time.
         *
         * @param thing   A Thing to slide across the screen.
         * @param change   How far to move each tick.
         * @param goal   A midY location to stop sliding at.
         * @param speed   How many ticks between movements.
         * @param onCompletion   A callback for when the Thing reaches the goal.
         * @returns The in-progress TimeEvent.
         */
        animateSlideVertical(thing: IThing, change: number, goal: number, speed: number, onCompletion?: (thing: IThing) => void): void;
        /**
         * Freezes a Character in grass and calls startBattle.
         *
         * @param thing   A Character about to start a battle.
         * @param grass   Grass the Character is walking in.
         */
        animateGrassBattleStart(thing: ICharacter, grass: IThing): void;
        /**
         * Freezes a Character and starts a battle with an enemy.
         *
         * @param thing   A Character about to start a battle with other.
         * @param other   An enemy about to battle thing.
         */
        animateTrainerBattleStart(thing: ICharacter, other: IEnemy): void;
        /**
         * Creates and positions a set of four Things around a point.
         *
         * @param x   The horizontal value of the point.
         * @param y   The vertical value of the point.
         * @param title   A title for each Thing to create.
         * @param settings   Additional settings for each Thing.
         * @param groupType   Which group to move the Things into, if any.
         * @returns The four created Things.
         */
        animateThingCorners(x: number, y: number, title: string, settings: any, groupType?: string): [IThing, IThing, IThing, IThing];
        /**
         * Moves a set of four Things away from a point.
         *
         * @param things   The four Things to move.
         * @param amount   How far to move each Thing horizontally and vertically.
         */
        animateExpandCorners(things: [IThing, IThing, IThing, IThing], amount: number): void;
        /**
         * Creates a small smoke animation from a point.
         *
         * @param x   The horizontal location of the point.
         * @param y   The vertical location of the point.
         * @param callback   A callback for when the animation is done.
         */
        animateSmokeSmall(x: number, y: number, callback: (thing: IThing) => void): void;
        /**
         * Creates a medium-sized smoke animation from a point.
         *
         * @param x   The horizontal location of the point.
         * @param y   The vertical location of the point.
         * @param callback   A callback for when the animation is done.
         */
        animateSmokeMedium(x: number, y: number, callback: (thing: IThing) => void): void;
        /**
         * Creates a large smoke animation from a point.
         *
         * @param x   The horizontal location of the point.
         * @param y   The vertical location of the point.
         * @param callback   A callback for when the animation is done.
         */
        animateSmokeLarge(x: number, y: number, callback: (thing: IThing) => void): void;
        /**
         * Animates an exclamation mark above a Thing.
         *
         * @param thing   A Thing to show the exclamation over.
         * @param timeout   How long to keep the exclamation (by default, 140).
         * @param callback   A callback for when the exclamation is removed.
         * @returns The exclamation Thing.
         */
        animateExclamation(thing: IThing, timeout?: number, callback?: () => void): IThing;
        /**
         * Fades the screen out to a solid color.
         *
         * @param settings   Settings for the animation.
         * @returns The solid color Thing.
         */
        animateFadeToColor(settings?: IColorFadeSettings): IThing;
        /**
         * Places a solid color over the screen and fades it out.
         *
         * @param settings   Settings for the animation.
         * @returns The solid color Thing.
         */
        animateFadeFromColor(settings?: IColorFadeSettings, ...args: any[]): IThing;
        /**
         * Animates a "flicker" effect on a Thing by repeatedly toggling its hidden
         * flag for a little while.
         *
         * @param thing   A Thing to flicker.
         * @param cleartime   How long to wait to stop the effect (by default, 49).
         * @param interval   How many steps between hidden toggles (by default, 2).
         * @param callback   A Function to called on the Thing when done flickering.
         * @returns The flickering time event.
         */
        animateFlicker(thing: IThing, cleartime?: number, interval?: number, callback?: (thing: IThing) => void): TimeHandlr.ITimeEvent;
        /**
         * Shakes all Things on the screen back and forth for a little bit.
         *
         *
         * @param EightBitter
         * @param dx   How far to shift horizontally (by default, 0).
         * @param dy   How far to shift horizontally (by default, 0).
         * @param cleartime   How long until the screen is done shaking.
         * @param interval   How many game upkeeps between movements.
         * @returns The shaking time event.
         */
        animateScreenShake(dx?: number, dy?: number, cleartime?: number, interval?: number, callback?: TimeHandlr.IEventCallback): TimeHandlr.ITimeEvent;
        /**
         * Sets a Character's xvel and yvel based on its speed and direction, and marks
         * its destination endpoint.
         *
         * @param thing   A moving Character.
         * @param distance   How far the Character is moving.
         */
        animateCharacterSetDistanceVelocity(thing: ICharacter, distance: number): void;
        /**
         * Starts a Character's walking cycle regardless of the direction.
         *
         * @param thing   A Character to start walking.
         * @param direction   What direction the Character should turn to face.
         * @param onStop   A queue of commands as alternating directions and distances.
         */
        animateCharacterStartWalkingCycle(thing: ICharacter, direction: Direction, onStop: IWalkingOnStop): void;
        /**
         * Starts a Character walking in the given direction as part of a walking cycle.
         *
         * @param thing   The Character to start walking.
         * @param direction   What direction to walk in (by default, up).
         * @param onStop   A queue of commands as alternating directions and distances.
         */
        animateCharacterStartWalking(thing: ICharacter, direction?: Direction, onStop?: any): void;
        /**
         * Starts a roaming Character walking in a random direction, determined
         * by the allowed directions it may use (that aren't blocked).
         *
         * @param thing   A roaming Character.
         */
        animateCharacterStartWalkingRandom(thing: ICharacter): void;
        /**
         * Continues a Character's walking cycle after taking a step. If .turning
         * is provided, the Character turns. If a Player is provided, its keys
         * and .canKeyWalking are respected.
         *
         * @param thing   A Character mid-step.
         */
        animateCharacterRepeatWalking(thing: ICharacter): void;
        /**
         * Reacts to a Character finishing a step and either stops all walking or moves to
         * the next action in the onStop queue.
         *
         * @param thing   A Character finishing a walking step.
         * @param onStop   A queue of commands as alternating directions and distances.
         * @returns True, unless the next onStop is a Function to return the result of.
         */
        animateCharacterStopWalking(thing: ICharacter, onStop?: IWalkingOnStop): boolean;
        /**
         * Animates a Player to stop walking, which is the same logic for a normal
         * Character as well as MenuGrapher and following checks.
         *
         * @param thing   A Player to stop walking.
         * @param onStop   A queue of commands as alternating directions and distances.
         * @returns True, unless the next onStop is a Function to return the result of.
         */
        animatePlayerStopWalking(thing: IPlayer, onStop: IWalkingOnStop): boolean;
        /**
         * Animates a Character to no longer be able to walk.
         *
         * @param thing   A Character that shouldn't be able to walk.
         */
        animateCharacterPreventWalking(thing: ICharacter): void;
        /**
         * Sets a Thing facing a particular direction.
         *
         * @param thing   An in-game Thing.
         * @param direction   A direction for thing to face.
         * @todo Add more logic here for better performance.
         */
        animateCharacterSetDirection(thing: IThing, direction: Direction): void;
        /**
         * Sets a Thing facing a random direction.
         *
         * @param thing   An in-game Thing.
         */
        animateCharacterSetDirectionRandom(thing: IThing): void;
        /**
         * Flips or unflips a Character if its direction is vertical.
         *
         * @param thing   A Character to flip or unflip.
         */
        animateSwitchFlipOnDirection(thing: ICharacter): void;
        /**
         * Positions a Character's detector in front of it as its sight.
         *
         * @param thing   A Character that should be able to see.
         */
        animatePositionSightDetector(thing: ICharacter): void;
        /**
         * Animates the various logic pieces for finishing a dialog, such as pushes,
         * gifts, options, and battle starting or disabling.
         *
         * @param thing   A Player that's finished talking to other.
         * @param other   A Character that thing has finished talking to.
         */
        animateCharacterDialogFinish(thing: IPlayer, other: ICharacter): void;
        /**
         * Displays a yes/no options menu for after a dialog has completed.
         *
         *
         * @param thing   A Player that's finished talking to other.
         * @param other   A Character that thing has finished talking to.
         * @param dialog   The dialog settings that just finished.
         */
        animateCharacterDialogOptions(thing: IPlayer, other: ICharacter, dialog: IDialog): void;
        /**
         * Starts a Character walking behind another Character. The leader is given a
         * .walkingCommands queue of recent steps that the follower will mimic.
         *
         * @param thing   The following Character.
         * @param other   The leading Character.
         */
        animateCharacterFollow(thing: ICharacter, other: ICharacter): void;
        /**
         * Continuation helper for a following cycle. The next walking command is
         * played, if it exists.
         *
         * @param thing   The following Character.
         * @param other   The leading Character.
         */
        animateCharacterFollowContinue(thing: ICharacter, other: ICharacter): void;
        /**
         * Animates a Character to stop having a follower.
         *
         * @param thing   The leading Character.
         * @returns True, to stop TimeHandlr cycles.
         */
        animateCharacterFollowStop(thing: ICharacter): boolean;
        /**
         * Animates a Character to hop over a ledge.
         *
         * @param thing   A walking Character.
         * @param other   A ledge for thing to hop over.
         */
        animateCharacterHopLedge(thing: ICharacter, other: IThing): void;
        /**
         * Activates a Detector to trigger a cutscene and/or routine.
         *
         * @param thing   A Player triggering other.
         * @param other   A Detector triggered by thing.
         */
        activateCutsceneTriggerer(thing: IPlayer, other: IDetector): void;
        /**
         * Activates a Detector to play an audio theme.
         *
         * @param thing   A Player triggering other.
         * @param other   A Detector triggered by thing.
         */
        activateThemePlayer(thing: IPlayer, other: IThemeDetector): void;
        /**
         * Activates a Detector to play a cutscene, and potentially a dialog.
         *
         * @param thing   A Player triggering other.
         * @param other   A Detector triggered by thing.
         */
        activateCutsceneResponder(thing: ICharacter, other: IDetector): void;
        /**
         * Activates a Detector to open a menu, and potentially a dialog.
         *
         * @param thing   A Character triggering other.
         * @param other   A Detector triggered by thing.
         */
        activateMenuTriggerer(thing: ICharacter, other: IMenuTriggerer): void;
        /**
         * Activates a Character's sight detector for when another Character walks
         * into it.
         *
         * @param thing   A Character triggering other.
         * @param other   A sight detector being triggered by thing.
         */
        activateSightDetector(thing: ICharacter, other: ISightDetector): void;
        /**
         * Activation callback for level transports (any Thing with a .transport
         * attribute). Depending on the transport, either the map or location are
         * shifted to it.
         *
         * @param thing   A Character attempting to enter other.
         * @param other   A transporter being entered by thing.
         */
        activateTransporter(thing: ICharacter, other: ITransporter): void;
        /**
         * Activation trigger for a gym statue. If the Player is looking up at it,
         * it speaks the status of the gym leader.
         *
         * @param thing   A Player activating other.
         * @param other   A gym statue being activated by thing.
         */
        activateGymStatue(thing: ICharacter, other: IGymDetector): void;
        /**
         * Calls an HMCharacter's partyActivate Function when the Player activates the HMCharacter.
         *
         * @param player   The Player.
         * @param thing   The Solid to be affected.
         */
        activateHMCharacter(player: IPlayer, thing: IHMCharacter): void;
        /**
         * Starts a Character roaming in random directions.
         *
         * @param thing   A Character to start roaming.
         * @returns Whether the time cycle should stop (thing is dead).
         */
        activateCharacterRoaming(thing: ICharacter): boolean;
        /**
         * Activates a Spawner by calling its .activate.
         *
         * @param thing   A newly placed Spawner.
         */
        activateSpawner(thing: IDetector): void;
        /**
         * Checks if a WindowDetector is within frame, and activates it if so.
         *
         * @param thing   An in-game WindowDetector.
         */
        checkWindowDetector(thing: IDetector): boolean;
        /**
         * Activates an AreaSpawner. If it's for a different Area than the current,
         * that area is spawned in the appropriate direction.
         *
         * @param thing   An AreaSpawner to activate.
         */
        spawnAreaSpawner(thing: IAreaSpawner): void;
        /**
         * Makes sure that Player is facing the correct HMCharacter
         *
         * @param player   The Player.
         * @param pokemon   The Pokemon using the move.
         * @param move   The move being used.
         * @todo Add context for what happens if player is not bordering the correct HMCharacter.
         * @todo Refactor to give borderedThing a .hmActivate property.
         */
        partyActivateCheckThing(player: IPlayer, pokemon: IPokemon, move: IHMMoveSchema): void;
        /**
         * Cuts a CuttableTree.
         *
         * @param player   The Player.
         * @param pokemon   The Pokemon using Cut.
         * @todo Add an animation for what happens when the CuttableTree is cut.
         */
        partyActivateCut(player: IPlayer, pokemon: IPokemon): void;
        /**
         * Makes a StrengthBoulder move.
         *
         * @param player   The Player.
         * @param pokemon   The Pokemon using Strength.
         * @todo Verify the exact speed, sound, and distance.
         */
        partyActivateStrength(player: IPlayer, pokemon: IPokemon): void;
        /**
         * Starts the Player surfing.
         *
         * @param player   The Player.
         * @param pokemon   The Pokemon using Strength.
         * @todo Add the dialogue for when the Player starts surfing.
         */
        partyActivateSurf(player: IPlayer, pokemon: IPokemon): void;
    }
    /**
     * Battle functions used by FullScreenPokemon instances.
     */
    class Battles<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Starts a Pokemon battle.
         *
         * @param battleInfo   Settings for the battle.
         */
        startBattle(battleInfo: IBattleInfo): void;
        /**
         * Heals a Pokemon back to full health.
         *
         * @param pokemon   An in-game Pokemon to heal.
         */
        healPokemon(pokemon: IPokemon): void;
        /**
         * Starts grass battle if a Player is in grass, using the doesGrassEncounterHappen
         * equation.
         *
         * @param thing   An in-game Player.
         */
        checkPlayerGrassBattle(thing: IPlayer): boolean;
        /**
         * Chooses a random wild Pokemon schema from the given ones.
         *
         * @param options   Potential Pokemon schemas to choose from.
         * @returns One of the potential Pokemon schemas at random.
         */
        chooseRandomWildPokemon(options: IWildPokemonSchema[]): IWildPokemonSchema;
        /**
         * Adds Ball and BallEmpty Things to a menu representing inventory Pokemon.
         *
         * @param menu   A menu to add the Things to.
         * @param battler   Information on the Pokemon to add balls for.
         */
        addBattleDisplayPokeballs(menu: IMenu, battler: BattleMovr.IBattler, opposite?: boolean): void;
        /**
         * Adds a Pokemon's health display to its appropriate menu.
         *
         * @param battlerName   Which battler to add the display for.
         */
        addBattleDisplayPokemonHealth(battlerName: "player" | "opponent"): void;
        /**
         * Adds a health bar to a battle display, with an appropriate width.
         *
         * @param battlerName   Which battler to add the display for, as "player"
         *                      or "opponent".
         * @param hp   How much health the battler's Pokemon currently has.
         * @param hp   The battler's Pokemon's normal maximum health.
         */
        setBattleDisplayPokemonHealthBar(battlerName: string, hp: number, hpNormal: number): void;
        /**
         * Animates a Pokemon's health bar to increase or decrease its width.
         *
         * @param battlerName   Which battler to add the display for, as "player"
         *                      or "opponent".
         * @param hpStart   The battler's Pokemon's starting health.
         * @param hpEnd   The battler's Pokemon's ending health.
         * @param hpNormal   The battler's Pokemon's normal maximum health.
         * @param callback   A callback for when the bar is done resizing.
         */
        animateBattleDisplayPokemonHealthBar(battlerName: string, hpStart: number, hpEnd: number, hpNormal: number, callback?: (...args: any[]) => void): void;
        /**
         * Opens the in-battle moves menu.
         */
        openBattleMovesMenu(): void;
        /**
         * Opens the in-battle items menu.
         */
        openBattleItemsMenu(): void;
        /**
         * Opens the in-battle Pokemon menu.
         */
        openBattlePokemonMenu(): void;
        /**
         * Starts the dialog to exit a battle.
         */
        startBattleExit(): void;
    }
    /**
     * Collision functions used by FullScreenPokemon instances.
     */
    class Collisions<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Function generator for the generic canThingCollide checker. This is used
         * repeatedly by ThingHittr to generate separately optimized Functions for
         * different Thing types.
         *
         * @returns A Function that generates a canThingCollide checker.
         */
        generateCanThingCollide(): (thing: IThing) => boolean;
        /**
         * Function generator for the generic isCharacterTouchingCharacter checker.
         * This is used repeatedly by ThingHittr to generate separately optimized
         * Functions for different Thing types.
         *
         * @returns A Function that generates isCharacterTouchingCharacter.
         */
        generateIsCharacterTouchingCharacter(): (thing: ICharacter, other: ICharacter) => boolean;
        /**
         * Function generator for the generic isCharacterTouchingSolid checker. This
         * is used repeatedly by ThingHittr to generate separately optimized
         * Functions for different Thing types.
         *
         * @returns A Function that generates isCharacterTouchingSolid.
         */
        generateIsCharacterTouchingSolid(): (thing: ICharacter, other: IThing) => boolean;
        /**
         * Function generator for the generic hitCharacterThing callback. This is
         * used repeatedly by ThingHittr to generate separately optimized Functions
         * for different Thing types.
         *
         * @returns A Function that generates hitCharacterThing.
         */
        generateHitCharacterThing(): (thing: ICharacter, other: IThing) => boolean;
        /**
         * Marks other as being a border of thing in the given direction, respecting borderPrimary.
         *
         * @param thing   A Thing whose borders are being checked.
         * @param other   A new border for thing.
         * @param direction   The direction border being changed.
         */
        setThingBordering(thing: IThing, other: IThing, direction: Direction): void;
        /**
         * Collision callback for a Character and a CollisionDetector. Only Players may
         * trigger the detector, which has to be active to do anything.
         *
         * @param thing   A Character triggering other.
         * @param other   A Detector triggered by thing.
         * @returns Whether to override normal positioning logic in hitCharacterThing.
         */
        collideCollisionDetector(thing: IPlayer, other: IDetector): boolean;
        /**
         * Collision callback for a Player and a dialog-containing Character. The
         * dialog is started if it exists, as with a cutscene from other.
         *
         * @param thing   A Player triggering other.
         * @param other   A Character with dialog triggered by thing.
         */
        collideCharacterDialog(thing: IPlayer, other: ICharacter): void;
        /**
         * Collision callback for a Player and a Pokeball it's interacting with.
         *
         * @param thing   A Player interacting with other.
         * @param other   A Pokeball being interacted with by thing.
         */
        collidePokeball(thing: IPlayer, other: IPokeball): void;
        /**
         * Marks a Character as being visually within grass.
         *
         * @param thing   A Character within grass.
         * @param other   The specific Grass that thing is within.
         */
        collideCharacterGrass(thing: ICharacter, other: IGrass): boolean;
        /**
         * Collision callback for a Character and a Ledge. If possible, the Character
         * is animated to start hopping over the Ledge.
         *
         * @param thing   A Character walking to other.
         * @param other   A Ledge walked to by thing.
         */
        collideLedge(thing: ICharacter, other: IThing): boolean;
        /**
         * Collision callback for a Character and a WaterEdge. If possible, the Character
         * is animated to move onto land.
         *
         * @param thing   A Character walking to other.
         * @param other   A Ledge walked to by thing.
         */
        collideWaterEdge(thing: ICharacter, other: IThing): boolean;
    }
    /**
     * Directions mapped to their String aliases.
     */
    interface IDirectionsToAliases {
        [i: number]: string;
    }
    /**
     * String aliases of directions mapped to those directions.
     */
    interface IDirectionAliases {
        [i: string]: Direction;
    }
    /**
     * Direction aliases mapped to their opposites, such as "left" to "right".
     */
    interface IDirectionOpposites {
        [i: string]: string;
    }
    /**
     * What direction(s) the screen may scroll from player movement.
     */
    enum Scrollability {
        /**
         * The screen may not scroll in either direction.
         */
        None = 0,
        /**
         * The screen may scroll vertically.
         */
        Vertical = 1,
        /**
         * The screen may scroll horizontally.
         */
        Horizontal = 2,
        /**
         * The screen may scroll vertically and horizontally.
         */
        Both = 3,
    }
    /**
     * How much to expand each pixel from raw sizing measurements to in-game.
     */
    const Unitsize: number;
    /**
     * Static scale of 2, to exand to two pixels per one game pixel.
     */
    const Scale: number;
    /**
     * Quickly tapping direction keys means to look in a direction, not walk.
     */
    const InputTimeTolerance: number;
    /**
     * The allowed uppercase keys to be shown in a keyboard.
     */
    const KeysUppercase: string[];
    /**
     * The allowed lowercase keys to be shown in a keyboard.
     */
    const KeysLowercase: string[];
    /**
     * Cardinal directions a Thing may face in-game.
     */
    enum Direction {
        Top = 0,
        Right = 1,
        Bottom = 2,
        Left = 3,
    }
    /**
     * Whether a Pokemon is unknown, has been caught, or has been seen.
     */
    enum PokedexListingStatus {
        Unknown = 0,
        Caught = 1,
        Seen = 2,
    }
    /**
     * Direction names, mapped to their opposites.
     */
    const DirectionOpposites: IDirectionOpposites;
    /**
     * Directions, keyed by their string aliases.
     */
    const DirectionAliases: IDirectionAliases;
    /**
     * String aliases of directions, keyed by the direction.
     */
    const DirectionsToAliases: IDirectionsToAliases;
    /**
     * Classes to add to Things facing particular directions.
     */
    const DirectionClasses: IDirectionsToAliases;
    /**
     * Direction aliases for AreaSpawner activations.
     */
    const DirectionSpawns: IDirectionsToAliases;
    /**
     * Cutscene functions used by FullScreenPokemon instances.
     */
    class Cutscenes<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Cutscene for starting a battle with a spiral.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleTransitionLineSpiral(settings: ITransitionLineSpiralSettings): void;
        /**
         * Cutscene for starting a battle with a series of flashes.
         *
         * @param settings   Settings used for the cutscene.
         * @remarks Three [black, white] flashes, then the spiral.
         */
        cutsceneBattleTransitionFlash(settings: ITransitionFlashSettings): void;
        /**
         * Cutscene for starting a battle with a twist.
         *
         * @param settings   Settings used for the cutscene.
         *
         * I think the way to do this would be to treat each quarter of the screen
         * as one section. Divide each section into 10 parts. On each interval
         * increase the maximum the parts can be, while each part is a fraction of
         * the maximum, rounded to a large amount to appear pixellated (perhaps,
         * unitsize * 32?).
         */
        cutsceneBattleTransitionTwist(settings: IBattleTransitionSettings): void;
        /**
         * Cutscene for starting a battle with a flash, then a twist..
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleTransitionFlashTwist(settings: IBattleTransitionSettings): void;
        /**
         * Cutscene for starting a battle. Players slide in, then the openingText
         * cutscene is called.
         *
         * @param settings   Settings used for the cutscene
         */
        cutsceneBattleEntrance(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for the opening text and base menus in a battle. Afer this,
         * the OpponentIntro or PlayerIntro cutscene is triggered.
         *
         * @param settings   Settings used for the cutscene
         */
        cutsceneBattleOpeningText(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for an enemy's intro in a battle. They enter, and either send
         * out a Pokemon or let the player intro.
         *
         * @param settings   Settings used for the cutscene
         */
        cutsceneBattleOpponentIntro(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for a player's intro into battle. Afterwards, the ShowPlayerMenu
         * cutscene is triggered.
         *
         * @param settings   Settings used for the cutscene
         */
        cutsceneBattlePlayerIntro(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for showing the player menu. The user may now interact with
         * the menu for controlling their side of the battle.
         *
         * @param settings   Settings used for the cutscene
         */
        cutsceneBattleShowPlayerMenu(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for the opponent starting to send out a Pokemon. A smoke effect
         * plays, then the OpponentSendOutAppear cutscene triggers.
         *
         * @param settings   Settings used for the cutscene
         * @param args   Settings to pass to the OpponentSendOut cutscene.
         */
        cutsceneBattleOpponentSendOut(settings: IBattleCutsceneSettings, args: IBattleRoutineSettings): void;
        /**
         * Cutscene for the opponent's Pokemon appearing. The .nextRoutine from args
         * is played.
         *
         * @param settings   Settings used for the cutscene
         * @param args   Settings to pass to the next routine.
         */
        cutsceneBattleOpponentSendOutAppear(settings: IBattleCutsceneSettings, args: IBattleRoutineSettings): void;
        /**
         * Cutscene for the player starting to send out a Pokemon. A smoke effect
         * plays, then the PlayerSendOutAppear cutscene triggers.
         *
         * @param settings   Settings used for the cutscene
         * @param args   Settings to pass to the PlayerSendOut cutscene.
         */
        cutsceneBattlePlayerSendOut(settings: any, args: IBattleRoutineSettings): void;
        /**
         * Cutscene for the player's Pokemon appearing. The .nextRoutine from args
         * is played.
         *
         * @param settings   Settings used for the cutscene
         * @param args   Settings to pass to the next routine.
         */
        cutsceneBattlePlayerSendOutAppear(settings: IBattleCutsceneSettings, args: IBattleRoutineSettings): void;
        /**
         * Cutscene for the player attempting to switch a Pokemon with itself.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattlePlayerSwitchesSamePokemon(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for the player to start a Pokemon move. After the announcement text,
         * the MovePlayerAnimate cutscene is played.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleMovePlayer(settings: IBattleCutsceneSettings, args: IBattleMoveRoutineSettings): void;
        /**
         * Cutscene for animating the player's chosen move.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleMovePlayerAnimate(settings: any, args: IBattleMoveRoutineSettings): void;
        /**
         * Cutscene for the opponent to start a Pokemon move. After the announcement text,
         * the MoveOpponentAnimate cutscene is played.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleMoveOpponent(settings: IBattleCutsceneSettings, args: IBattleMoveRoutineSettings): void;
        /**
         * Cutscene for animating an opponent's chosen move.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleMoveOpponentAnimate(settings: IBattleCutsceneSettings, args: IBattleMoveRoutineSettings): void;
        /**
         * Cutscene for applying and animating damage in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleDamage(settings: IBattleCutsceneSettings, args: IBattleActionRoutineSettings): void;
        /**
         * Cutscene for a Pokemon fainting in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattlePokemonFaints(settings: IBattleCutsceneSettings, args: IBattleActionRoutineSettings): void;
        /**
         * Cutscene for choosing what to do after a Pokemon faints in battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleAfterPlayerPokemonFaints(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for after an opponent's Pokemon faints in battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleAfterOpponentPokemonFaints(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for an opponent switching Pokemon in battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleOpponentSwitchesPokemon(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for a player's Pokemon gaining experience in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleExperienceGain(settings: IBattleCutsceneSettings, args: IBattleLevelRoutineSettings): void;
        /**
         * Cutscene for a player's Pokemon leveling up in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleLevelUp(settings: IBattleCutsceneSettings, args: IBattleLevelRoutineSettings): void;
        /**
         * Cutscene for displaying a Pokemon's statistics in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleLevelUpStats(settings: IBattleCutsceneSettings, args: IBattleLevelRoutineSettings): void;
        /**
         * Cutscene for a player choosing a Pokemon (creating the menu for it).
         */
        cutsceneBattlePlayerChoosesPokemon(): void;
        /**
         * Cutscene for failing to run from a trainer battle.
         */
        cutsceneBattleExitFail(): void;
        /**
         * Cutscene for returning to a battle after failing to exit.
         *
         */
        cutsceneBattleExitFailReturn(): void;
        /**
         * Cutscene for becoming victorious in battle.
         */
        cutsceneBattleVictory(): void;
        /**
         * Cutscene for the opponent responding to the player's victory.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleVictorySpeech(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for receiving cash for defeating an opponent.
         *
         * @param settings   Settings used for the cutscene
         */
        cutsceneBattleVictoryWinnings(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for the player being defeated in battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleDefeat(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for a battle completely finishing.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleComplete(settings: IBattleCutsceneSettings): void;
        /**
         * Cutscene for changing a statistic in battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneBattleChangeStatistic(settings: any, args: IBattleStatisticRoutineSettings): void;
        /**
         * Cutscene for a Growl attack in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleAttackGrowl(settings: IBattleCutsceneSettings, args: IBattleAttackRoutineSettings): void;
        /**
         * Cutscene for a Tackle attack in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleAttackTackle(settings: IBattleCutsceneSettings, args: IBattleAttackRoutineSettings): void;
        /**
         * Cutscene for a Tail Whip attack in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleAttackTailWhip(settings: IBattleCutsceneSettings, args: IBattleAttackRoutineSettings): void;
        /**
         * Cutscene for a Scratch attack in battle.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneBattleAttackScratch(settings: IBattleCutsceneSettings, args: IBattleAttackRoutineSettings): void;
        /**
         * Cutscene for when a trainer is encountered for battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneTrainerSpottedExclamation(settings: any): void;
        /**
         * Cutscene for when a trainer approaches the player after being encountered.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneTrainerSpottedApproach(settings: any): void;
        /**
         * Cutscene for a trainer introduction after the player is approached.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneTrainerSpottedDialog(settings: any): void;
        /**
         * Cutscene for a nurse's welcome at the Pokemon Center.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeCenterWelcome(settings: any): void;
        /**
         * Cutscene for choosing whether or not to heal Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeCenterChoose(settings: any): void;
        /**
         * Cutscene for choosing to heal Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeCenterChooseHeal(settings: any): void;
        /**
         * Cutscene for placing Pokeballs into the healing machine.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeCenterHealing(settings: any): void;
        /**
         * Cutscene for Pokemon being healed in the healing machine.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutscenePokeCenterHealingAction(settings: any, args: any): void;
        /**
         * Cutscene for when the Pokemon have finished healing.
         *
         * @param settings   Settings used for the cutscene.
         * @param args Settings for the routine.
         */
        cutscenePokeCenterHealingComplete(settings: any, args: any): void;
        /**
         * Cutscene for choosing not to heal Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeCenterChooseCancel(settings: any): void;
        /**
         * Cutscene for speaking to a PokeMart cashier.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeMartGreeting(settings: any): void;
        /**
         * Cutscene showing the PokeMart action options.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeMartOptions(settings: any): void;
        /**
         * Cutscene for the PokeMart item menu.
         *
         * @param settings   Settings used for the cutscene.
         *
         * @todo Add constants for all items, for display names
         */
        cutscenePokeMartBuyMenu(settings: any): void;
        /**
         * Cutscene for selecting the amount of an item the player wishes to buy.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutscenePokeMartSelectAmount(settings: any, args: any): void;
        /**
         * Cutscene for confirming a PokeMart purchase.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutscenePokeMartConfirmPurchase(settings: any, args: any): void;
        /**
         * Cutscene for canceling a PokeMart purchase.
         *
         * @param settings   Settings used for the cutscene.
         *
         * @todo Why is the BuyMenu text appearing twice?
         */
        cutscenePokeMartCancelPurchase(settings: any): void;
        /**
         * Cutscene for carrying out a PokeMart transaction. Can either confirm or deny
         * the purchase based on the player's total money.
         *
         * @param settings   Settings used for the cutscene.
         * @param args  Settings for the routine.
         */
        cutscenePokeMartTryPurchase(settings: any, args: any): void;
        /**
         * Cutscene for when the player does not have enough money for the
         * PokeMart purchase.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeMartFailPurchase(settings: any): void;
        /**
         * Cutscene for asking if the player wants to continue shopping.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeMartContinueShopping(settings: any): void;
        /**
         * Cutscene for the player choosing to stop shopping.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutscenePokeMartExit(settings: any): void;
        /**
         * Cutscene for the beginning of the game introduction.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroFadeIn(settings: any): void;
        /**
         * Cutscene for Oak's introduction.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroFirstDialog(settings: any): void;
        /**
         * Cutscene for Oak's introduction exit.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroFirstDialogFade(settings: any): void;
        /**
         * Cutscene for transitioning Nidorino onto the screen.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPokemonExpo(settings: any): void;
        /**
         * Cutscene for showing an explanation of the Pokemon world.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPokemonExplanation(settings: any): void;
        /**
         * Cutscene showing the player.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerAppear(settings: any): void;
        /**
         * Cutscene asking the player to enter his/her name.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerName(settings: any): void;
        /**
         * Cutscene for sliding the player over to show the naming options.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerSlide(settings: any): void;
        /**
         * Cutscene for showing the player naming option menu.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerNameOptions(settings: any): void;
        /**
         * Cutscene for the player selecting Blue, Gary, or John.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerNameFromMenu(settings: any): void;
        /**
         * Cutscene for the player choosing to customize a new name.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerNameFromKeyboard(settings: any): void;
        /**
         * Cutscene confirming the player's name.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerNameConfirm(settings: any): void;
        /**
         * Cutscene fading the player out.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroPlayerNameComplete(settings: any): void;
        /**
         * Cutscene for showing the rival.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalAppear(settings: any): void;
        /**
         * Cutscene introducing the rival.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalName(settings: any): void;
        /**
         * Cutscene for sliding the rival over to show the rival naming options.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalSlide(settings: any): void;
        /**
         * Cutscene for showing the rival naming option menu.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalNameOptions(settings: any): void;
        /**
         * Cutscene for choosing to name the rival Red, Ash, or Jack.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalNameFromMenu(settings: any): void;
        /**
         * Cutscene for choosing to customize the rival's name.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalNameFromKeyboard(settings: any): void;
        /**
         * Cutscene for confirming the rival's name.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalNameConfirm(settings: any): void;
        /**
         * Cutscene fading the rival out.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroRivalNameComplete(settings: any): void;
        /**
         * Cutscene for fading the player in.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroLastDialogAppear(settings: any): void;
        /**
         * Cutscene for the last part of the introduction.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroLastDialog(settings: any): void;
        /**
         * Cutscene for shrinking the player.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroShrinkPlayer(settings: any): void;
        /**
         * Cutscene for completing the introduction and fading it out.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroFadeOut(settings: any): void;
        /**
         * Cutscene showing the player in his bedroom.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneIntroFinish(settings: any): void;
        /**
         * Cutscene for walking into the grass before receiving a Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroFirstDialog(settings: any): void;
        /**
         * Cutscene showing the exclamation point over the player's head.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroExclamation(settings: any): void;
        /**
         * Cutscene for animating Oak to walk to the player.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroCatchup(settings: any): void;
        /**
         * Cutscene for Oak telling the player to keep out of the grass.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroGrassWarning(settings: any): void;
        /**
         * Cutscene for the player following Oak to the Professor's lab.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroFollowToLab(settings: any): void;
        /**
         * Cutscene for entering Oak's lab.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroEnterLab(settings: any): void;
        /**
         * Cutscene for Oak offering a Pokemon to the player.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroWalkToTable(settings: any): void;
        /**
         * Cutscene for the rival complaining to Oak.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalComplain(settings: any): void;
        /**
         * Cutscene for Oak telling the player to pick a Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroOakThinksToRival(settings: any): void;
        /**
         * Cutscene for the rival protesting to Oak.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalProtests(settings: any): void;
        /**
         * Cutscene for Oak responding to the rival's protest.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroOakRespondsToProtest(settings: any): void;
        /**
         * Cutscene for the player checking a Pokeball.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoicePlayerChecksPokeball(settings: any): void;
        /**
         * Cutscene for confirming the player wants to keep the chosen Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoicePlayerDecidesPokemon(settings: any): void;
        /**
         * Cutscene for the player receiving his Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoicePlayerTakesPokemon(settings: any): void;
        /**
         * Cutscene for allowing the player to choose his Pokemon's nickname.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoicePlayerChoosesNickname(settings: any): void;
        /**
         * Cutscene for the player finishing the naming process.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoicePlayerSetsNickname(settings: any): void;
        /**
         * Cutscene for the rival selecting his Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoiceRivalWalksToPokemon(settings: any): void;
        /**
         * Cutscene for the rival receiving his Pokemon.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroPokemonChoiceRivalTakesPokemon(settings: any): void;
        /**
         * Cutscene for the rival challenging the player to a Pokemon battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalBattleApproach(settings: any): void;
        /**
         * Cutscene for showing the lab after the battle ends.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalLeavesAfterBattle(settings: any): void;
        /**
         * Cutscene for the rival's comment after losing the battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalLeavesComplaint(settings: any): void;
        /**
         * Cutscene for the rival telling Oak he is leaving.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalLeavesGoodbye(settings: any): void;
        /**
         * Cutscene for the rival leaving the lab and Oak giving the player advice.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakIntroRivalLeavesWalking(settings: any): void;
        /**
         * Cutscene for the battle between the player and the rival.
         *
         * @param settings   Settings used for the cutscene.
         * @param args   Settings for the routine.
         */
        cutsceneOakIntroRivalBattleChallenge(settings: any, args: any): void;
        /**
         * Cutscene for the PokeMart clerk calling the player to pick up Oak's parcel.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelPickupGreeting(settings: any): void;
        /**
         * Cutscene for the player walking to the counter when picking up the parcel.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelPickupWalkToCounter(settings: any): void;
        /**
         * Cutscene for the player receiving the parcel from the PokeMart clerk.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelPickupCounterDialog(settings: any): void;
        /**
         * Cutscene for when the player delivers the parcel to Oak.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryGreeting(settings: any): void;
        /**
         * Cutscene for when the rival interrupts Oak and the player.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryRivalInterrupts(settings: any): void;
        /**
         * Cutscene for the rival walking up to Oak and the player.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryRivalWalksUp(settings: any): void;
        /**
         * Cutscene for the rival asking Oak why he was called.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryRivalInquires(settings: any): void;
        /**
         * Cutscene for Oak requesting something of the player and rival.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryOakRequests(settings: any): void;
        /**
         * Cutscene for Oak describing the Pokedex.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryOakDescribesPokedex(settings: any): void;
        /**
         * Cutscene for Oak giving the player and rival Pokedexes.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryOakGivesPokedex(settings: any): void;
        /**
         * Cutscene for Oak describing his life goal.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryOakDescribesGoal(settings: any): void;
        /**
         * Cutscene for the rival accepting the Pokedex and challenge to complete Oak's goal.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneOakParcelDeliveryRivalAccepts(settings: any): void;
        /**
         * Cutscene for Daisy giving the player a Town Map.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneDaisyTownMapGreeting(settings: any): void;
        /**
         * Cutscene for the player receiving the Town Map.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneDaisyTownMapReceiveMap(settings: any): void;
        /**
         * Cutscene for the old man battling a Weedle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneElderTrainingStartBattle(settings: any): void;
        /**
         * Cutscene for encountering the rival on Route 22.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneRivalRoute22RivalEmerges(settings: any): void;
        /**
         * Cutscene for the rival talking to the player before the battle.
         *
         * @param settings   Settings used for the cutscene.
         */
        cutsceneRivalRoute22RivalTalks(settings: any): void;
    }
    /**
     * Cycling functions used by FullScreenPokemon instances.
     */
    class Cycling<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Starts the Player cycling if the current Area allows it.
         *
         * @param thing   A Player to start cycling.
         * @param area   The current Area.
         * @returns Whether the properties were changed.
         */
        startCycling(thing: IPlayer): boolean;
        /**
         * Stops the Player cycling.
         *
         * @param thing   A Player to stop cycling.
         */
        stopCycling(thing: IPlayer): void;
        /**
         * Toggles the Player's cycling status.
         *
         * @param thing   A Player to start or stop cycling.
         * @returns Whether the Player started cycling.
         */
        toggleCycling(thing: IPlayer): boolean;
    }
    /**
     * Fishing functions used by FullScreenPokemon instances.
     */
    class Fishing<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Starts the Player fishing.
         *
         * @param player   A Player to start fishing.
         * @param rod   The rod that will be used to fish.
         */
        startFishing(player: IPlayer, item: IItemSchema): void;
        /**
         * Displays message and starts battle when player lands a fish.
         *
         * @param player   A Player who landed the fish.
         * @param rod   The rod that will be used to fish.
         */
        playerLandedFish(player: IPlayer, rod: IRod): void;
        /**
         * Displays message when a Player does not land a fish.
         *
         * @param player   A Player who does not land a fish.
         */
        playerFailedLandingFish(player: IPlayer): void;
    }
    /**
     * Gameplay functions used by IGameStartr instances.
     */
    class Gameplay<TEightBittr extends FullScreenPokemon> extends GameStartr.Gameplay<TEightBittr> {
        /**
         * Completely restarts the game. The StartOptions menu is shown.
         */
        gameStart(): void;
        /**
         * Sets the map to Blank and displays the StartOptions menu.
         */
        startOptions(): void;
        /**
         * Starts the game in the saved map and location from ItemsHolder, and fires the
         * onGameStartPlay mod trigger.
         */
        startPlay(): void;
        /**
         * Starts the game's intro, and fires the onGameStartIntro mod trigger.
         */
        startIntro(): void;
        /**
         * Loads a file using a dummy HTMLInputElement, then starts the game with it as
         * game state. The onGameStartIntro mod event is triggered.
         */
        loadFile(): void;
        /**
         * Checks whether inputs may trigger, which is always true, and prevents the event.
         *
         * @param player   FSP's current user-controlled Player.
         * @param code   An key/mouse code from the event.
         * @param event   The original user-caused Event.
         * @returns Whether inputs may trigger (true).
         */
        canInputsTrigger(player?: IPlayer, code?: any, event?: Event): boolean;
        /**
         * Starts the game (currently a no-op).
         */
        onGamePlay(): void;
        /**
         * Pauses the game (currently a no-op).
         */
        onGamePause(): void;
        /**
         * Closes the game (currently a no-op).
         */
        onGameClose(): void;
    }
    /**
     * Graphics functions used by FullScreenPokemon instances.
     */
    class Graphics<TEightBittr extends FullScreenPokemon> extends GameStartr.Graphics<TEightBittr> {
        /**
         * Collects all unique Things that should be kept on top of battle intro animations.
         *
         * @param thingsRaw   Titles of and/or references to Things that should be kept.
         * @returns The unique Things that will be kept.
         */
        collectBattleKeptThings(thingsRaw: (string | IThing)[]): IThing[];
        /**
         * Moves all kept Things in a battle to the Text group for animations.
         *
         * @param batleInfo    In-game state and settings for an ongoing battle.
         */
        moveBattleKeptThingsToText(battleInfo: IBattleInfo): void;
        /**
         * Moves all kept Things in a battle back to their original groups.
         *
         * @param batleInfo    In-game state and settings for an ongoing battle.
         */
        moveBattleKeptThingsBack(battleInfo: IBattleInfo): void;
    }
    /**
     * Container for holding the states of objects in the game.
     */
    interface IStateHistory {
        [i: string]: [any];
    }
    /**
     * An object for saving this object's state history.
     */
    interface IStateSaveable {
        /**
         * Holds the states of an object in the game.
         */
        state: IStateHistory;
    }
    /**
     * A simple container for Map attributes given by switching to an Area within
     * that map. A bounding box of the current viewport is kept, along with a bag
     * of assorted variable values.
     */
    interface IMapScreenr extends MapScreenr.IMapScreenr {
        /**
         * Whether user inputs should be ignored.
         */
        blockInputs: boolean;
        /**
         * The currently playing cutscene, if any.
         */
        cutscene?: string;
        /**
         * What direction the player is currently facing.
         */
        playerDirection: number;
        /**
         * What theme is currently playing.
         */
        theme?: string;
        /**
         * Known variables, keyed by name.
         */
        variables: {
            /**
             * Whether the current Area allows bicycling.
             */
            allowCycling?: boolean;
            /**
             * The current size of the area Things are placed in.
             */
            boundaries: IAreaBoundaries;
            /**
             * What form of scrolling is currently capable on the screen.
             */
            scrollability: number;
        };
    }
    /**
     * Things keyed by their ids.
     */
    interface IThingsById {
        [i: string]: IThing;
    }
    /**
     * Settings regarding in-game battles, particularly for an IBattleMovr.
     */
    interface IBattleMovrCustoms extends BattleMovr.IBattleMovrSettings, GameStartr.IGameStartrSettingsObject {
        /**
         * The IMenuGraphr handling menu creation.
         */
        MenuGrapher?: MenuGraphr.IMenuGraphr;
    }
    /**
     * Settings regarding the level editor, particularly for an ILevelEditr.
     */
    interface ILevelEditrCustoms extends GameStartr.IGameStartrSettingsObject {
    }
    /**
     * Settings regarding computations, particularly for an IMathDecidr.
     */
    interface IMathDecidrCustoms extends GameStartr.IMathDecidrCustoms {
        /**
         * Constants the IMathDecidr may use in equations.
         */
        constants: IMathConstants;
        /**
         * Calculation Functions, keyed by name.
         */
        equations: IMathEquations;
    }
    /**
     * Constants for an IMathDecidr, including all static Pokemon information.
     */
    interface IMathConstants {
        /**
         * An INumberMakr for random number generation.
         */
        NumberMaker?: NumberMakr.INumberMakr;
        /**
         * Names of all statistics Pokemon have.
         */
        statisticNames?: string[];
        /**
         * Names of Pokemon statistics to display in statistics menus.
         */
        statisticNamesDisplayed?: string[];
        /**
         * How much to expand each pixel from raw sizing measurements to in-game.
         */
        unitsize: number;
        /**
         * Information on Pokemon status effects.
         */
        statuses: {
            /**
             * Names of all statuses Pokemon may have.
             */
            names: string[];
            /**
             * Statuses that will enable a Pokemon to be caught in the canCatchPokemon
             * equation if a random generated N is < 25.
             */
            probability25: {
                [i: string]: boolean;
            };
            /**
             * Statuses that will enable a Pokemon to be caught in the canCatchPokemon
             * equation if a random generated N is < 21.
             */
            probability12: {
                [i: string]: boolean;
            };
            /**
             * Bonus probability points awarded for statuses in the canCatchPokemon equation
             * against the random generated N.
             */
            levels: {
                [i: string]: number;
            };
            /**
             * Additional shake points (s) in the numBallShakes equation for each status.
             */
            shaking: {
                [i: string]: number;
            };
        };
        /**
         * [X, Y] coordinates for spots on the Town Map to display Thing icons.
         */
        townMapLocations: {
            [i: string]: [number, number];
        };
        /**
         * Information on Pokemon types.
         */
        types: {
            /**
             * Names of types Pokemon may be.
             */
            names: string[];
            /**
             * Type names mapped to their location in the type effectiveness table.
             */
            indices: {
                [i: string]: number;
            };
            /**
             * The type effectiveness table, mapping each [attacker, defender] type
             * effectiveness multiplier.
             */
            table: number[][];
        };
        /**
         * All known Pokemon, keyed by concatenated name.
         */
        pokemon: {
            [i: string]: IPokemonListing;
        };
        /**
         * All known Pokemon moves, keyed by concatenated name.
         */
        moves: {
            [i: string]: IMoveSchema;
        };
        /**
         * All known items, keyed by concatenated name.
         */
        items: {
            [i: string]: IItemSchema;
        };
        /**
         * Battle modifications used in the opponentMove equation.
         */
        battleModifications: {
            [i: string]: IBattleModification;
        };
    }
    /**
     * Calculation Functions for an IMathDecidr, keyed by name.
     */
    interface IMathEquations extends MathDecidr.IEquations {
        /**
         * Generates a new Pokemon with the given traits.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param title   The type of Pokemon to create.
         * @param level   The level of the new Pokemon (by default, 1).
         * @param moves   What moves the Pokemon has (by default, generated from its type
         *                and level).
         * @param iv   What IV points the Pokemon should start with (by default, generated
         *             from the newPokemonIVs equation.
         * @param ev   What EV points the Pokemon should start with (by default, generated
         *             from the newPokemonEVs equation).
         * @returns A newly created Pokemon.
         */
        newPokemon: (constants: IMathConstants, equations: IMathEquations, title: string[], level?: number, moves?: BattleMovr.IMove[], iv?: number, ev?: number) => IPokemon;
        /**
         * Computes the default new moves for a Pokemon based on its type and level.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param title   The type of Pokemon.
         * @param level   The level of the Pokemon.
         * @returns The default moves of the Pokemon.
         */
        newPokemonMoves: (constants: IMathConstants, equations: IMathEquations, title: string[], level: number) => BattleMovr.IMove[];
        /**
         * Computes a random set of IV points for a new Pokemon.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @returns A random set of IV points.
         */
        newPokemonIVs: (constants: IMathConstants, equations: IMathEquations) => {
            [i: string]: number;
        };
        /**
         * Computes a blank set of EV points for a new Pokemon.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @returns A blank set of EV points.
         */
        newPokemonEVs: (constants: IMathConstants, equations: IMathEquations) => {
            [i: string]: number;
        };
        /**
         * Computes how much experience a new Pokemon should start with, based on its
         * type and level.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param title   The type of Pokemon.
         * @param level   The level of the Pokemon.
         * @returns How much experience the Pokemon should start with.
         */
        newPokemonExperience: (constants: IMathConstants, equations: IMathEquations, title: string[], level: number) => BattleMovr.IActorExperience;
        /**
         * Computes a Pokemon's new statistic based on its IVs and EVs.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param statistic   Which statistic to compute.
         * @returns A new value for the statistic.
         */
        pokemonStatistic: (constants: IMathConstants, equations: IMathEquations, pokemon: IPokemon, statistic: string) => number;
        /**
         * Determines whether a wild encounter should occur when walking through grass.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param grass   The grass Thing being walked through.
         * @returns Whether a wild encounter should occur.
         */
        doesGrassEncounterHappen: (constants: IMathConstants, equations: IMathEquations, grass: IGrass) => boolean;
        /**
         * Determines whether a Pokemon may be caught by a ball.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param pokemon   The Pokemon the ball is attempting to catch.
         * @param ball   The ball attempting to catch the Pokemon.
         * @returns Whether the Pokemon may be caught.
         */
        canCatchPokemon: (constants: IMathConstants, equations: IMathEquations, pokemon: IPokemon, ball: IBattleBall) => boolean;
        /**
         * Determines whether the player may flee a wild Pokemon encounter.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param pokemon   The player's current Pokemon.
         * @param enemy   The wild Pokemon.
         * @param battleInfo   Information on the current battle.
         * @returns Whether the player may flee.
         */
        canEscapePokemon: (constants: IMathConstants, equations: IMathEquations, pokemon: IPokemon, enemy: IPokemon, battleInfo: IBattleInfo) => boolean;
        /**
         * Calculates how many times a failed Pokeball should shake.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param pokemon   The wild Pokemon the ball is failing to catch.
         * @param ball   The Pokeball attempting to catch the wild Pokemon.
         * @returns How many times the balls hould shake.
         */
        numBallShakes: (constants: IMathConstants, equations: IMathEquations, pokemon: IPokemon, ball: IBattleBall) => number;
        /**
         * Determines what move an opponent should take in battle.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param player   The in-battle player.
         * @param opponent   The in-battle opponent.
         * @returns The contatenated name of the move the opponent will choose.
         */
        opponentMove: (constants: IMathConstants, equations: IMathEquations, player: IBattler, opponent: IBattler) => string;
        /**
         * Checks whether a Pokemon contains any of the given types.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param pokemon   A Pokemon.
         * @param types   The types to check.
         * @returns Whether the Pokemon's types includes any of the given types.
         */
        pokemonMatchesTypes: (constants: IMathConstants, equations: IMathEquations, pokemon: IPokemon, types: string[]) => boolean;
        /**
         * Checks whether a move only has a status effect (does no damage, or nothing).
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param move   The move.
         * @returns Whether the moves has only a status effect.
         */
        moveOnlyStatuses: (constants: IMathConstants, equations: IMathEquations, move: IMoveSchema) => boolean;
        /**
         * Modifies a move possibility's priority based on battle state.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param possibility   A move possibility.
         * @param modification   A modification summary for a part of the battle state.
         * @param target   The Pokemon being targeted.
         * @param amount   How much to modify the move's priority.
         */
        applyMoveEffectPriority: (constants: IMathConstants, equations: IMathEquations, possibility: IMovePossibility, modification: IBattleModification, target: IPokemon, amount: number) => void;
        /**
         * Determines whether a player's Pokemon should move before the opponent's.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param player   The in-battle player.
         * @param choicePlayer   The concatenated name of the move the player chose.
         * @param opponent   The in-battle opponent.
         * @param choiesOpponent   The concatenated name of the move the opponent chose.
         * @returns Whether the player will move before the opponent.
         */
        playerMovesFirst: (constants: IMathConstants, equations: IMathEquations, player: IBattler, choicePlayer: string, opponent: IBattler, choiceOpponent: string) => boolean;
        /**
         * Computes how much damage a move should do to a Pokemon.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param move   The concatenated name of the move.
         * @param attacker   The attacking pokemon.
         * @param defender   The defending Pokemon.
         * @returns How much damage should be dealt.
         */
        damage: (constants: IMathConstants, equations: IMathEquations, move: string, attacker: IPokemon, defender: IPokemon) => number;
        /**
         * Determines the damage modifier against a defending Pokemon.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param move   The attacking Pokemon's move.
         * @param critical   Whether the move is a critical hit.
         * @param attacker   The attacking Pokemon.
         * @param defender   The defending Pokemon.
         * @returns The damage modifier, as a multiplication constant.
         */
        damageModifier: (constants: IMathConstants, equations: IMathEquations, move: IMoveSchema, critical: boolean, attacker: IPokemon, defender: IPokemon) => number;
        /**
         * Determines whether a move should be a critical hit.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param move   The concatenated name of the move.
         * @param attacker   The attacking Pokemon.
         * @returns Whether the move should be a critical hit.
         */
        criticalHit: (constants: IMathConstants, equations: IMathEquations, move: string, attacker: IPokemon) => boolean;
        /**
         * Determines the type effectiveness of a move on a defending Pokemon.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param move   The concatenated name of the move.
         * @param defender   The defending Pokemon.
         * @returns A damage modifier, as a multiplication constant.
         */
        typeEffectiveness: (constants: IMathConstants, equations: IMathEquations, move: string, defender: IPokemon) => number;
        /**
         * Computes how much experience a new Pokemon should start with.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param title   The name of the Pokemon.
         * @param level   The level of the Pokemon.
         * @returns An amount of experience.
         */
        experienceStarting: (IMathConstants: IMathConstants, equations: IMathEquations, title: string[], level: number) => number;
        /**
         * Computes how much experience should be gained from defeating a Pokemon.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param player   The in-game player, whose selected actor has been victorious.
         * @param opponent   The in-game opponent, whose selected actor has been defeated.
         * @returns How much experience is to be gained.
         * @remarks This will need to be changed to accomodate rewarding multiple Pokemon.
         */
        experienceGained: (constants: IMathConstants, equations: IMathEquations, player: IBattler, opponent: IBattler) => number;
        /**
         * Computes how wide a health bar should be.
         *
         * @param constants   Constants from the calculating IMathDecidr.
         * @param equations   Other calculation Functions from the IMathDecidr.
         * @param widthFullBar   The maximum possible width.
         * @param hp   How much HP a Pokemon currently has.
         * @param hpNormal   The maximum HP the Pokemon may have.
         * @returns How wide the health bar should be.
         */
        widthHealthBar: (constants: IMathConstants, equations: IMathEquations, widthFullBar: number, hp: number, hpNormal: number) => number;
    }
    /**
     * Settings regarding maps, particularly for AreaSpawnr, MapScreenr,
     * and MapsCreatr.
     */
    interface IMapCustoms extends GameStartr.IMapCustoms {
        /**
         * Known map Objects, keyed by name.
         */
        library: {
            [i: string]: IMapRaw;
        };
    }
    /**
     * Settings regarding a menu system, particularly for an IMenuGraphr.
     */
    interface IMenuGraphrCustoms extends GameStartr.IGameStartrSettingsObject {
        /**
         * The controlling GameStartr.
         */
        GameStarter?: GameStartr.GameStartr;
        /**
         * Known menu schemas, keyed by name.
         */
        schemas?: MenuGraphr.IMenuSchemas;
        /**
         * Alternate titles for texts, such as " " to "space".
         */
        aliases?: MenuGraphr.IAliases;
        /**
         * Programmatic replacements for deliniated words.
         */
        replacements?: MenuGraphr.IReplacements;
    }
    /**
     * Settings regarding large-scale state storage, particularly for an IStateHoldr.
     */
    interface IStateHoldrCustoms extends GameStartr.IGameStartrSettingsObject, StateHoldr.IStateHoldrSettings {
    }
    /**
     * Settings regarding the UI, particularly for an IUserWrappr.
     */
    interface IUserWrapprCustoms extends GameStartr.IGameStartrSettingsObject, UserWrappr.IUserWrapprSettings {
    }
    /**
     * Stored settings to be stored separately and kept within an IFullScreenPokemon.
     */
    interface IFullScreenPokemonStoredSettings extends GameStartr.IGameStartrStoredSettings {
        /**
         * Settings regarding in-game battles, particularly for an IBattleMovr.
         */
        battles: IBattleMovrCustoms;
        /**
         * Settings regarding computations, particularly for an IMathDecidr.
         */
        math: IMathDecidrCustoms;
        /**
         * Settings regarding maps, particularly for an IAreaSpawnr, an
         * IMapScreenr, and an IMapsCreatr.
         */
        maps: IMapCustoms;
        /**
         * Settings regarding a menu system, particularly for an IMenuGraphr.
         */
        menus: IMenuGraphrCustoms;
        /**
         * Settings regarding large-scale state storage, particularly for an IStateHoldr.
         */
        state: IStateHoldrCustoms;
    }
    /**
     * Static information about a known Pokemon.
     */
    interface IPokemonListing {
        /**
         * The height of the Pokemon, as ["feet", "inches"].
         */
        height: [string, string];
        /**
         * A short label for the Pokemon, such as "Psi" for Abra.
         */
        label: string;
        /**
         * What number the Pokemon is in the Pokedex.
         */
        number: number;
        /**
         * The type of sprite used in-game for this Pokemon, such as "Water".
         */
        sprite: string;
        /**
         * Lines of text describing the Pokemon.
         */
        info: string[];
        /**
         * The name of the Pokemon this evolves into. This will be refactored eventually.
         */
        evolvesInto?: string;
        /**
         * How this Pokemon evolves. This will be refactored eventually.
         */
        evolvesVia?: string;
        /**
         * How quickly this gains experience, as "slow", "mediumSlow", "mediumFast", or "fast".
         */
        experienceType?: string;
        /**
         * How much this weighs.
         */
        weight: number;
        /**
         * This Pokemons 1 or 2 types.
         */
        types: string[];
        /**
         * The rate of HP statistic growth.
         */
        HP: number;
        /**
         * The rate of Attack statistic growth.
         */
        Attack: number;
        /**
         * The rate of Defense statistic growth.
         */
        Defense: number;
        /**
         * The rate of Special statistic growth.
         */
        Special: number;
        /**
         * The rate of HP statistic growth.
         */
        Speed: number;
        /**
         * Known moves this Pokemon may learn.
         */
        moves: IPokemonMovesListing;
    }
    /**
     * A description of a Pokemon in a player's Pokedex.
     * @todo It's not clear how this is different from IPokedexInformation.
     */
    interface IPokedexListing extends IPokemonListing {
        /**
         * Whether the Pokemon has been caught.
         */
        caught?: boolean;
        /**
         * Whether the Pokemon has been seen.
         */
        seen?: boolean;
        /**
         * The concatenated title of the Pokemon.
         */
        title: string;
    }
    /**
     * A description of a Pokemon in a player's Pokedex.
     * @todo It's not clear how this is different from IPokedexListing.
     */
    interface IPokedexInformation {
        /**
         * Whether the Pokemon has been caught.
         */
        caught?: boolean;
        /**
         * Whether the Pokemon has been seen.
         */
        seen?: boolean;
        /**
         * The title of the Pokemon.
         */
        title: string[];
    }
    /**
     * A player's Pokedex, as a summary of seen Pokemon keyed by name.
     */
    interface IPokedex {
        [i: string]: IPokedexInformation;
    }
    /**
     * Moves able to be learned by a Pokemon via different methods.
     */
    interface IPokemonMovesListing {
        /**
         * Moves a Pokemon may learn by leveling up.
         */
        natural: IPokemonMoveListing[];
        /**
         * Moves a Pokemon may learn by HM.
         */
        hm: IPokemonMoveListing[];
        /**
         * Moves a Pokemon may learn by TM.
         */
        tm: IPokemonMoveListing[];
    }
    /**
     * A description of a move a Pokemon may learn.
     */
    interface IPokemonMoveListing {
        /**
         * The concatenated title of the move.
         */
        move: string;
        /**
         * What level the move may be learned, if by leveling up.
         */
        level?: number;
    }
    /**
     * A general description of a save file.
     */
    interface ISaveFile {
        [i: string]: any;
    }
    /**
     *
     */
    interface IMapRaw extends MapsCreatr.IMapRaw {
        /**
         * A listing of areas in the Map, keyed by name.
         */
        areas: {
            [i: string]: IAreaRaw;
            [i: number]: IAreaRaw;
        };
        /**
         * The default location for the Map.
         */
        locationDefault: string;
        /**
         * Descriptions of locations in the map.
         */
        locations: {
            [i: string]: ILocationRaw;
            [i: number]: ILocationRaw;
        };
        /**
         * A starting seed to initialize random number generation.
         */
        seed?: number | number[];
        /**
         * What theme to play by default, such as "Pallet Town".
         */
        theme?: string;
    }
    /**
     * A Map parsed from its raw JSON-friendly description.
     */
    interface IMap extends IStateSaveable, MapsCreatr.IMap {
        /**
         * A listing of areas in the Map, keyed by name.
         */
        areas: {
            [i: string]: IArea;
            [i: number]: IArea;
        };
        /**
         * The name of the Map, such as "Pallet Town".
         */
        name: string;
        /**
         * The default location for the Map.
         */
        locationDefault?: string;
        /**
         * A starting seed to initialize random number generation.
         */
        seed: number | number[];
        /**
         * What theme to play by default, such as "Pallet Town".
         */
        theme: string;
    }
    /**
     *
     */
    interface IAreaRaw extends MapsCreatr.IAreaRaw {
        /**
         * Whether the Area allows bicycling.
         */
        allowCycling?: boolean;
        /**
         * Any additional attributes that should add extra properties to this Area.
         */
        attributes?: {
            [i: string]: any;
        };
        /**
         * What background to display behind all Things.
         */
        background?: string;
        /**
         * How tall the area is.
         * @todo It's not clear if this is different from boundaries.height.
         */
        height?: number;
        /**
         * Whether the area should have invisible borders added around it.
         */
        invisibleWallBorders?: boolean;
        /**
         * A default theme to override the parent Map's.
         */
        theme?: string;
        /**
         * How wide the area is.
         * @todo It's not clear if this is different from boundaries.width.
         */
        width?: number;
        /**
         * Wild Pokemon that may appear in this Area.
         */
        wildPokemon?: IAreaWildPokemonOptionGroups;
    }
    /**
     * An Area parsed from a raw JSON-friendly Map description.
     */
    interface IArea extends IAreaRaw, IStateSaveable, MapsCreatr.IArea {
        /**
         * Whether the Area allows bicycling.
         */
        allowCycling: boolean;
        /**
         * What background to display behind all Things.
         */
        background: string;
        /**
         * In-game boundaries of all placed Things.
         */
        boundaries: IAreaBoundaries;
        /**
         * The Map this Area is within.
         */
        map: IMap;
        /**
         * Whether this Area has been spawned.
         */
        spawned: boolean;
        /**
         * Which Map spawned this Area and when.
         */
        spawnedBy: IAreaSpawnedBy;
        /**
         * Wild Pokemon that may appear in this Area.
         */
        wildPokemon: IAreaWildPokemonOptionGroups;
        /**
         * Whether the Player has encountered a Pokemon in this area's grass.
         */
        pokemonEncountered?: boolean;
    }
    /**
     * A description of how an Area has been stretched by its placed Things.
     */
    interface IAreaBoundaries {
        /**
         * How wide the Area is.
         */
        width: number;
        /**
         * How tall the Area is.
         */
        height: number;
        /**
         * The top border of the boundaries' bounding box.
         */
        top: number;
        /**
         * The right border of the boundaries' bounding box.
         */
        right: number;
        /**
         * The bottom border of the boundaries' bounding box.
         */
        bottom: number;
        /**
         * The left border of the boundaries' bounding box.
         */
        left: number;
    }
    /**
     * A description of which Map spawned an Area and when.
     */
    interface IAreaSpawnedBy {
        /**
         * The name of the Map that spawned the Area.
         */
        name: string;
        /**
         * When the spawning occurred.
         */
        timestamp: number;
    }
    /**
     * Types of Pokemon that may appear in an Area, keyed by terrain type, such as "grass".
     */
    interface IAreaWildPokemonOptionGroups {
        /**
         * Types of Pokemon that may appear in grass.
         */
        grass?: IWildPokemonSchema[];
        /**
         * Types of Pokemon that may appear in water.
         */
        fishing?: IWildFishingPokemon;
    }
    /**
     * A description of a type of Pokemon that may appear in an Area.
     */
    interface IWildPokemonSchema {
        /**
         * The type of Pokemon.
         */
        title: string[];
        /**
         * What level the Pokemon may be, if only one.
         */
        level?: number;
        /**
         * What levels the Pokemon may be, if multiple.
         */
        levels?: number[];
        /**
         * Concatenated names of moves the Pokemon should have.
         */
        moves?: string[];
        /**
         * The rate of appearance for this type of Pokemon, in [0, 1].
         */
        rate?: number;
    }
    /**
     *
     */
    interface ILocationRaw extends MapsCreatr.ILocationRaw {
        /**
         * A cutscene to immediately start upon entering.
         */
        cutscene?: string;
        /**
         * A direction to immediately face the player towards.
         */
        direction?: number;
        /**
         * Whether the player should immediately walk forward.
         */
        push?: boolean;
        /**
         * A cutscene routine to immediately start upon entering.
         */
        routine?: string;
        /**
         * A theme to immediately play upon entering.
         */
        theme?: string;
        /**
         * The x-location in the parent Area.
         */
        xloc?: number;
        /**
         * The y-location in the parent Area.
         */
        yloc?: number;
    }
    /**
     * A Location parsed from a raw JSON-friendly Map description.
     */
    interface ILocation extends IStateSaveable, MapsCreatr.ILocation {
        /**
         * The Area this Location is a part of.
         */
        area: IArea;
        /**
         * A cutscene to immediately start upon entering.
         */
        cutscene?: string;
        /**
         * A direction to immediately face the player towards.
         */
        direction?: number;
        /**
         * Whether the player should immediately walk forward.
         */
        push?: boolean;
        /**
         * A cutscene routine to immediately start upon entering.
         */
        routine?: string;
        /**
         * A theme to immediately play upon entering.
         */
        theme?: string;
        /**
         * The x-location in the parent Area.
         */
        xloc?: number;
        /**
         * The y-location in the parent Area.
         */
        yloc?: number;
    }
    /**
     * Information on a move's metadata and effects.
     */
    interface IMoveSchema {
        /**
         * The type of move, such as "Water".
         */
        type: string;
        /**
         * What type of damage this does, as "Physical", "Special", or "Non-Damaging".
         */
        damage: string;
        /**
         * What type of alternate effect the move does, such as "Status" or "Raise".
         */
        effect?: string;
        /**
         * The power of the move, as a damage Number or "-".
         */
        power: string | number;
        /**
         * The accuracy of the move, as "<number>%" (such as "70%") or "-".
         */
        accuracy: string;
        /**
         * The maximum PP for the move.
         */
        PP: number;
        /**
         * A friendly description of the move's effects.
         */
        description: string;
        /**
         * How much of an alternate effect the move has for changing statistics.
         */
        amount?: number;
        /**
         * Whether the move has a higher chance of being a critical hit.
         */
        criticalRaised?: boolean;
        /**
         * What status to lower, if applicable.
         */
        lower?: string;
        /**
         * What speed priority this move has.
         */
        priority?: number;
        /**
         * What status to raise, if applicable.
         */
        raise?: string;
        /**
         * Which status to give, such as "Sleep", if applicable.
         */
        status?: string;
    }
    /**
     * An HM move or move that interacts with the environment.
     */
    interface IHMMoveSchema extends IMoveSchema {
        /**
         * Activates a Function to perform an HM move outside of battle.
         */
        partyActivate?: (player: IPlayer, pokemon: IPokemon) => void;
        /**
         * The HMCharacter that the move affects.
         */
        characterName?: string;
        /**
         * The badge needed to use the HM move.
         */
        requiredBadge?: string;
    }
    /**
     * A static description of an in-game item.
     * @todo Refactor this when items are implemented.
     */
    interface IItemSchema {
        /**
         * A short description of what the item does, such as "Cures Poison".
         */
        effect: string;
        /**
         * What category of items this falls under, such as "Main", "Pokeball", or "Key".
         */
        category: string;
        /**
         * How much the item costs in a store.
         */
        price?: number;
        /**
         * An error message displayed when you try to use an item at a time when you're not allowed.
         */
        error?: string;
        /**
         * A Function to be called when the item is used.
         */
        bagActivate?: Function;
    }
    /**
     * The types of Pokemon that can be caught with different rods.
     */
    interface IWildFishingPokemon {
        /**
         * The Pokemon that can be caught using an Old Rod.
         */
        old?: IWildPokemonSchema[];
        /**
         * The Pokemon that can be caught using a Good Rod.
         */
        good?: IWildPokemonSchema[];
        /**
         * The Pokemon that can be caught using a Super Rod.
         */
        super?: IWildPokemonSchema[];
    }
    /**
     * The type of rod that is being used.
     */
    interface IRod extends IItemSchema {
        /**
         * The type of rod used. Can be old, good, or super.
         * @todo Make type explicitly "old" | "good" | "super".
         */
        type: string;
        /**
         * The name of the rod used.
         */
        title: string;
    }
    /**
     * A possible move to be chosen, with its probability.
     */
    interface IMovePossibility {
        /**
         * The concatenated name of the move.
         */
        move: string;
        /**
         * What priority the move has, for the applyMoveEffectPriority equation.
         */
        priority: number;
    }
    /**
     * An in-game Pokeball item.
     */
    interface IBattleBall extends IItemSchema {
        /**
         * A maximum probability N for the canCatchPokemon equation.
         */
        probabilityMax: number;
        /**
         * A multiplier for the opponent Pokemon's HP in canCatchPokemon.
         */
        rate: number;
        /**
         * The type of ball, such as "Great" or "Master".
         */
        type: string;
    }
    /**
     * A modifier for battle behavior in the opponentMove equation.
     */
    interface IBattleModification {
        /**
         * What type of opponents this applies to.
         */
        opponentType: string[];
        /**
         * Move type preferences, as the type of change, the target, and optionally
         * a Number amount if relevant.
         */
        preferences: ([string, string, number] | [string, string])[];
    }
    /**
     * In-game state and settings for an ongoing battle.
     */
    interface IBattleInfo extends BattleMovr.IBattleInfo {
        /**
         * Allowed starting battle animations to choose between.
         */
        animations?: string[];
        /**
         * Whether the battle should advance its menus automatically.
         */
        automaticMenus?: boolean;
        /**
         * A badge to award the player upon victory.
         */
        badge?: string;
        /**
         *
         */
        battlers: IBattlers;
        /**
         * How many times the player has attempted to flee.
         */
        currentEscapeAttempts?: number;
        /**
         * A gift to give the player upon victory.
         */
        giftAfterBattle?: string;
        /**
         * How much of the gift to give (by default, 1).
         */
        giftAfterBattleAmount?: number;
        /**
         * Things that should be visible above the starting animation.
         */
        keptThings?: IThing[];
        /**
         * Whether losing skip the player blacking out and respawning elsewhere.
         */
        noBlackout?: boolean;
        /**
         * A callback for after showing the player menu.
         */
        onShowPlayerMenu?: () => void;
        /**
         * Text to display after a battle victory when in the real world again.
         */
        textAfterBattle?: MenuGraphr.IMenuDialogRaw;
        /**
         * Text to display upon defeat.
         */
        textDefeat?: MenuGraphr.IMenuDialogRaw;
        /**
         * Text for when the opponent sends out a Pokemon. The opponent's name and the
         * Pokemon's nickname are between the Strings.
         */
        textOpponentSendOut?: [string, string, string];
        /**
         * Text for when the player sends out a Pokemon. The Pokemon's name is between the
         * Strings.
         */
        textPlayerSendOut?: [string, string];
        /**
         * Text for when the battle starts. The opponent's name is between the Strings.
         */
        textStart?: [string, string];
        /**
         * Text to display upon victory.
         */
        textVictory?: MenuGraphr.IMenuDialogRaw;
        /**
         * An audio theme to play during the battle.
         */
        theme?: string;
    }
    /**
     *
     */
    interface IBattlers extends BattleMovr.IBattlers {
        /**
         * The opponent battler's information.
         */
        opponent?: IBattler;
        /**
         * The player's battle information.
         */
        player?: IBattler;
        [i: string]: IBattler;
    }
    /**
     * A trainer in battle, namely either the player or opponent.
     */
    interface IBattler extends BattleMovr.IBattler {
        /**
         * The trainer's available Pokemon.
         */
        actors: IPokemon[];
        /**
         * Whether this opponent doesn't understand status effects, for the opponentMove equation.
         */
        dumb?: boolean;
        /**
         * The amount of money given for defeating this opponent.
         */
        reward?: number;
        /**
         * The trainer's currently selected Pokemon.
         */
        selectedActor?: IPokemon;
    }
    /**
     * A Pokemon, stored in the player's party and/or as an in-battle actor.
     */
    interface IPokemon extends BattleMovr.IActor {
        /**
         * Current (in-battle) Attack.
         */
        Attack: number;
        /**
         * Default Attack.
         */
        AttackNormal: number;
        /**
         * Current (in-battle) Defense.
         */
        Defense: number;
        /**
         * Default Defense.
         */
        DefenseNormal: number;
        /**
         * Accumulated effort value points.
         */
        EV: {
            /**
             * Attack EV points.
             */
            Attack: number;
            /**
             * Defense EV points.
             */
            Defense: number;
            /**
             * Special EV points.
             */
            Special: number;
            /**
             * Speed EV points.
             */
            Speed: number;
        };
        /**
         * Current (in-battle) HP.
         */
        HP: number;
        /**
         * Default HP.
         */
        HPNormal: number;
        /**
         * Accumulated individual value points.
         */
        IV: {
            /**
             * Attack IV points.
             */
            Attack: number;
            /**
             * Defense IV points.
             */
            Defense: number;
            /**
             * HP IV points.
             */
            HP: number;
            /**
             * Special IV points.
             */
            Special: number;
            /**
             * Speed IV points.
             */
            Speed: number;
        };
        /**
         * Current (in-battle) Special.
         */
        Special: number;
        /**
         * Default Special.
         */
        SpecialNormal: number;
        /**
         * Current (in-battle) Speed.
         */
        Speed: number;
        /**
         * Default Speed.
         */
        SpeedNormal: number;
        /**
         * How difficult this is to catch, for the canCatchPokemon equation.
         */
        catchRate?: number;
        /**
         * How likely a critical hit is from this Pokemon, for the criticalHit equation.
         */
        criticalHitProbability?: boolean;
        /**
         * The Pokemon's nickname.
         */
        nickname: string[];
        /**
         * The level the Pokemon was before enabling the Level 100 mod.
         */
        previousLevel?: number;
        /**
         * Any current status, such as "Poison".
         */
        status: string;
        /**
         * Whether the Pokemon was traded from another trainer.
         */
        traded?: boolean;
        /**
         * What types this Pokemon is, such as "Water".
         */
        types: string[];
    }
    /**
     * A description of a simple general text dialog to start.
     */
    interface IDialog {
        /**
         * An optional cutscene to start after the dialog.
         */
        cutscene?: string;
        /**
         * Options for a yes or no dialog menu with callbacks after the dialog.
         */
        options?: IDialogOptions;
        /**
         * The actual text to display in the dialog.
         */
        words: MenuGraphr.IMenuDialogRaw;
    }
    /**
     * Dialog settings for a yes or no menu after a dialog.
     */
    interface IDialogOptions {
        /**
         * What to display after the "Yes" option is activated.
         */
        Yes: string | IDialog;
        /**
         * What to display after the "No" option is activated.
         */
        No: string | IDialog;
    }
    /**
     * A position holder around an in-game Thing.
     */
    interface IPreThing extends MapsCreatr.IPreThing {
        /**
         * A starting direction to face (by default, up).
         */
        direction?: number;
        /**
         * The in-game Thing.
         */
        thing: IThing;
        /**
         * The raw x-location from the Area's creation command.
         */
        x: number;
        /**
         * The raw y-location from the Area's creation command.
         */
        y: number;
        /**
         * How wide the Thing should be.
         */
        width?: number;
        /**
         * How tall the Thing should be.
         */
        height: number;
    }
    /**
     * An in-game Thing with size, velocity, position, and other information.
     */
    interface IThing extends GameStartr.IThing, IStateSaveable {
        /**
         * What to do when a Character, commonly a Player, activates this Thing.
         *
         * @param activator   The Character activating this.
         * @param activated   The Thing being activated.
         */
        activate?: (activator: ICharacter, activated?: IThing) => void;
        /**
         * The area this was spawned by.
         */
        areaName: string;
        /**
         * Things this is touching in each cardinal direction.
         */
        bordering: IThing[];
        /**
         * Whether this should be chosen over other Things if it is one of multiple
         * potential Thing borders.
         */
        borderPrimary?: boolean;
        /**
         * What to do when a Character collides with this Thing.
         *
         * @param thing   The Character colliding with this Thing.
         * @param other   This thing being collided by the Character.
         */
        collide: (thing: ICharacter, other: IThing) => boolean;
        /**
         * Animation cycles set by the ITimeHandlr.
         */
        cycles: TimeHandlr.ITimeCycles;
        /**
         * Whether this has been killed.
         */
        dead?: boolean;
        /**
         * What cardinal direction this is facing.
         */
        direction: number;
        /**
         * Whether this is undergoing a "flicker" effect by toggling .hidden on an interval.
         */
        flickering?: boolean;
        /**
         * The globally identifiable, potentially unique id of this Thing.
         */
        id: string;
        /**
         * The name of the map that spawned this.
         */
        mapName: string;
        /**
         * Whether this is barred from colliding with other Things.
         */
        nocollide?: boolean;
        /**
         * How many quadrants this is contained within.
         */
        numquads: number;
        /**
         * A horizontal visual offset to shift by.
         */
        offsetX?: number;
        /**
         * A vertical visual offset to shift by.
         */
        offsetY?: number;
        /**
         * Whether to shift this to the "beginning" or "end" of its Things group.
         */
        position: string;
        /**
         * Whether this has been spawned into the game.
         */
        spawned: boolean;
        /**
         * Bottom vertical tolerance for not colliding with another Thing.
         */
        tolBottom: number;
        /**
         * Left vertical tolerance for not colliding with another Thing.
         */
        tolLeft: number;
        /**
         * Right horizontal tolerance for not colliding with another Thing.
         */
        tolRight: number;
        /**
         * Top vertical tolerance for not colliding with another Thing.
         */
        tolTop: number;
        /**
         * Keying by a Direction gives the corresponding bounding box edge.
         */
        [direction: number]: number;
    }
    /**
     * A Character Thing.
     * @todo This should be separated into its sub-classes the way FSM's ICharacter is.
     */
    interface ICharacter extends IThing {
        /**
         * For custom triggerable Characters, whether this may be used.
         */
        active?: boolean;
        /**
         * A Thing that activated this character.
         */
        collidedTrigger?: IDetector;
        /**
         * A cutscene to activate when interacting with this Character.
         */
        cutscene?: string;
        /**
         * The x- or y- position this will finish walking to, if applicable.
         */
        destination: number;
        /**
         * A dialog to start when activating this Character. If dialogDirections is true,
         * it will be interpreted as a separate dialog for each direction of interaction.
         */
        dialog?: MenuGraphr.IMenuDialogRaw | MenuGraphr.IMenuDialogRaw[];
        /**
         * Whether dialog should definitely be treated as an Array of one Dialog each direction.
         */
        dialogDirections?: number[];
        /**
         * A single set of dialog (or dialog directions) to play after the primary dialog
         * is complete.
         */
        dialogNext?: MenuGraphr.IMenuDialogRaw | MenuGraphr.IMenuDialogRaw[];
        /**
         * A dialog to place after the primary dialog as a yes or no menu.
         * @todo If the need arises, this could be changed to any type of menu.
         */
        dialogOptions?: IDialog;
        /**
         * A direction to always face after a dialog completes.
         */
        directionPreferred?: number;
        /**
         * How far this will travel while walking, such as hopping over a ledge.
         */
        distance: number;
        /**
         * A Character walking directly behind this as a follower.
         */
        follower?: ICharacter;
        /**
         * A Character this is walking directly behind as a follower.
         */
        following?: ICharacter;
        /**
         * The time cycle keeping this behind the Character it's following.
         */
        followingLoop?: TimeHandlr.ITimeEvent;
        /**
         * An item to give after a dialog is first initiated.
         */
        gift?: string;
        /**
         * A grass Scenery partially covering this while walking through a grass area.
         */
        grass?: IGrass;
        /**
         * How high the grass Scenery should be.
         */
        heightGrass?: number;
        /**
         * A scratch variable for height, such as when behind grass.
         */
        heightOld?: number;
        /**
         * Whether this is currently moving, generally from walking.
         */
        isMoving: boolean;
        /**
         * A ledge this is hopping over.
         */
        ledge?: IThing;
        /**
         * A callback for when this starts a single walking step.
         *
         * @param character   This character that has started walking.
         * @param direction   The direction the Character is facing.
         */
        onWalkingStart: (character: ICharacter, direction: number) => void;
        /**
         * A callback for when this stops a single walking step, commonly to keep walking.
         *
         * @param character   A Character mid-step.
         * @param onStop   Commands to run as a walking continuation.
         */
        onWalkingStop: (character: ICharacter, onStop: IWalkingOnStop) => void;
        /**
         * Whether this is allowed to be outside the QuadsKeepr quadrants area, or not
         * have a true .alive, without dieing.
         */
        outerOk?: boolean;
        /**
         * Whether this is a Player.
         */
        player?: boolean;
        /**
         * What direction to push the Player back after a dialog, if any.
         */
        pushDirection?: number;
        /**
         * Steps for the Player to take after being pushed back.
         */
        pushSteps?: IWalkingOnStop;
        /**
         * Whether this is sporadically
         */
        roaming?: boolean;
        /**
         * Directions this is allowed to roam.
         */
        roamingDirections?: number[];
        /**
         * How far this can "see" a Player to walk forward and trigger a dialog.
         */
        sight?: number;
        /**
         * The Detector stretching in front of this Thing as its sight.
         */
        sightDetector?: ISightDetector;
        /**
         * A shadow Thing for when this is hopping a ledge.
         */
        shadow?: IThing;
        /**
         * Whether this intends to walk when its current walking step is complete.
         */
        shouldWalk: boolean;
        /**
         * How fast this moves.
         */
        speed: number;
        /**
         * A scratch variable for speed.
         */
        speedOld?: number;
        /**
         * Whether the player is currently surfing.
         */
        surfing?: boolean;
        /**
         * Whether this should turn towards an activating Character when a dialog is triggered.
         */
        switchDirectionOnDialog?: boolean;
        /**
         * Whether this is currently engaging in its activated dialog.
         */
        talking?: boolean;
        /**
         * Whether this is a Pokemon trainer, to start a battle after its dialog.
         */
        trainer?: boolean;
        /**
         * Whether this should transport an activating Character.
         */
        transport?: string | ITransportSchema;
        /**
         * Where this will turn to when its current walking step is complete.
         */
        turning?: number;
        /**
         * Whether this is currently walking.
         */
        walking?: boolean;
        /**
         * A queue of walking commands in waiting, used by its follower.
         */
        walkingCommands?: number[];
        /**
         * The class cycle for flipping back and forth while walking.
         */
        walkingFlipping?: TimeHandlr.ITimeEvent;
    }
    /**
     * An Enemy Thing such as a trainer or wild Pokemon.
     */
    interface IEnemy extends ICharacter {
        /**
         * Actors this trainer will use in battle.
         */
        actors: IWildPokemonSchema[];
        /**
         * Whether this trainer has already battled and shouldn't again.
         */
        alreadyBattled?: boolean;
        /**
         * A badge to gift when this Enemy is defeated.
         */
        badge?: string;
        /**
         * The name this will have in battle.
         */
        battleName?: string;
        /**
         * The sprite this will display as in battle, if not its battleName.
         */
        battleSprite?: string;
        /**
         * A gift to give after defeated in battle.
         */
        giftAfterBattle?: string;
        /**
         * A cutscene to trigger after defeated in battle.
         */
        nextCutscene?: string;
        /**
         * The title of the trainer before enabling the Joey's Rattata mod.
         */
        previousTitle?: string;
        /**
         * A monetary reward to give after defeated in battle.
         */
        reward: number;
        /**
         * Dialog to display after defeated in battle.
         */
        textDefeat?: MenuGraphr.IMenuDialogRaw;
        /**
         * Dialog to display after the battle is over.
         */
        textAfterBattle?: MenuGraphr.IMenuDialogRaw;
        /**
         * Text display upon victory.
         */
        textVictory?: MenuGraphr.IMenuDialogRaw;
    }
    /**
     * A Player Character.
     */
    interface IPlayer extends ICharacter {
        /**
         * Whether Detectors this collides with should consider walking to be an indication
         * of activation. This is useful for when the Player is following but needs to trigger
         * a Detector anyway.
         */
        allowDirectionAsKeys?: boolean;
        /**
         * Whether this is allowed to start walking via user input.
         */
        canKeyWalking: boolean;
        /**
         * Whether the player is currently bicycling.
         */
        cycling: boolean;
        /**
         * @returns A new descriptor container for key statuses.
         */
        getKeys: () => IPlayerKeys;
        /**
         * A descriptor for a user's keys' statuses.
         */
        keys: IPlayerKeys;
        /**
         * A next direction to turn to after the current walking step.
         */
        nextDirection?: number;
    }
    /**
     * A descriptor for a user's keys' statuses.
     */
    interface IPlayerKeys {
        /**
         * Whether the user is currently indicating a selection.
         */
        a: boolean;
        /**
         * Whether the user is currently indicating a deselection.
         */
        b: boolean;
        /**
         * Whether the user is currently indicating to go up.
         */
        0: boolean;
        /**
         * Whether the user is currently indicating to go to the right.
         */
        1: boolean;
        /**
         * Whether the user is currently indicating to go down.
         */
        2: boolean;
        /**
         * Whether the user is currently indicating to go to the left.
         */
        3: boolean;
    }
    /**
     * A Grass Thing.
     */
    interface IGrass extends IThing {
        /**
         * How likely this is to trigger a grass encounter in the doesGrassEncounterHappen
         * equation, as a Number in [0, 187.5].
         */
        rarity: number;
    }
    /**
     * A Detector Thing. These are typically Solids.
     */
    interface IDetector extends IThing {
        /**
         * Whether this is currently allowed to activate.
         */
        active?: boolean;
        /**
         * A callback for when a Player activates this.
         *
         * @param thing   The Player activating other, or other if a self-activation.
         * @param other   The Detector being activated by thing.
         */
        activate?: (thing: IPlayer | IDetector, other?: IDetector) => void;
        /**
         * A cutscene to start when this is activated.
         */
        cutscene?: string;
        /**
         * A dialog to start when activating this Character. If an Array, it will be interpreted
         * as a separate dialog for each cardinal direction of interaction.
         */
        dialog?: MenuGraphr.IMenuDialogRaw;
        /**
         * Whether this shouldn't be killed after activation (by default, false).
         */
        keepAlive?: boolean;
        /**
         * Whether this requires a direction to be activated.
         */
        requireDirection?: number;
        /**
         * Whether a Player needs to be fully within this Detector to trigger it.
         */
        requireOverlap?: boolean;
        /**
         * A cutscene routine to start when this is activated.
         */
        routine?: string;
        /**
         * Whether this should deactivate itself after a first use (by default, false).
         */
        singleUse?: boolean;
    }
    /**
     * A Solid with a partyActivate callback Function.
     */
    interface IHMCharacter extends ICharacter {
        /**
         * The name of the move needed to interact with this HMCharacter.
         */
        moveName: string;
        /**
         * The partyActivate Function used to interact with this HMCharacter.
         */
        moveCallback: (player: IPlayer, pokemon: IPokemon) => void;
        /**
         * The badge needed to activate this HMCharacter.
         */
        requiredBadge: string;
    }
    /**
     * A WaterEdge object.
     */
    interface IWaterEdge extends IHMCharacter {
        /**
         * The direction the Player must go to leave the water.
         */
        exitDirection: number;
    }
    /**
     * A Detector that adds an Area into the game.
     */
    interface IAreaSpawner extends IDetector {
        /**
         * The name of the Map to retrieve the Area within.
         */
        map: string;
        /**
         * The Area to add into the game.
         */
        area: string;
    }
    /**
     * A gym statue.
     */
    interface IGymDetector extends IDetector {
        /**
         * The name of the gym.
         */
        gym: string;
        /**
         * The name of the gym's leader.
         */
        leader: string;
    }
    /**
     * A Detector that activates a menu dialog.
     */
    interface IMenuTriggerer extends IDetector {
        /**
         * The name of the menu, if not "GeneralText".
         */
        menu?: string;
        /**
         * Custom attributes to apply to the menu.
         */
        menuAttributes?: MenuGraphr.IMenuSchema;
        /**
         * What direction to push the activating Player back after a dialog, if any.
         */
        pushDirection?: number;
        /**
         * Steps for the activating Player to take after being pushed back.
         */
        pushSteps?: IWalkingOnStop;
    }
    /**
     * An Character's sight Detector.
     */
    interface ISightDetector extends IDetector {
        /**
         * The Character using this Detector as its sight.
         */
        viewer: ICharacter;
    }
    /**
     * A Detector to play an audio theme.
     */
    interface IThemeDetector extends IDetector {
        /**
         * The audio theme to play.
         */
        theme: string;
    }
    /**
     * A detector to transport to a new area.
     */
    interface ITransporter extends IDetector {
        transport: string | ITransportSchema;
    }
    /**
     * A description of where to transport.
     */
    type ITransportSchema = {
        /**
         * The name of the Map to transport to.
         */
        map: string;
        /**
         * The name of the Location to transport to.
         */
        location: string;
    };
    /**
     * A Pokeball containing some item or trigger.
     */
    interface IPokeball extends IDetector {
        /**
         * The activation action, as "item", "cutscene", "pokedex", "dialog", or "yes/no".
         */
        action: string;
        /**
         * How many of an item to give, if action is "item".
         */
        amount?: number;
        /**
         * What dialog to say, if action is "dialog".
         */
        dialog?: MenuGraphr.IMenuDialogRaw;
        /**
         * What item to give, if action is "item".
         */
        item?: string;
        /**
         * The title of the Pokemon to display, if action is "Pokedex".
         */
        pokemon?: string[];
        /**
         * What routine to play, if action is "cutscene".
         */
        routine?: string;
    }
    /**
     * General attributes for all menus.
     */
    interface IMenuBase extends MenuGraphr.IMenuBase {
        /**
         * Whether this has the dirty visual background.
         */
        dirty?: boolean;
        /**
         * Whether this has the light visual background.
         */
        light?: boolean;
        /**
         * Whether this has the lined visual background.
         */
        lined?: boolean;
        /**
         * Whether this has the plain white visual background.
         */
        plain?: boolean;
        /**
         * Whether this has the water visual background.
         */
        watery?: boolean;
    }
    /**
     * A schema to specify creating a menu.
     */
    interface IMenuSchema extends MenuGraphr.IMenuSchema {
        /**
         * Whether the menu should be hidden.
         */
        hidden?: boolean;
    }
    /**
     * A Menu Thing.
     */
    interface IMenu extends IMenuBase, IThing {
        /**
         * Children Things attached to the Menu.
         */
        children: IThing[];
        /**
         * How tall this is.
         */
        height: number;
        /**
         * Any settings to attach to this Menu.
         */
        settings?: any;
        /**
         * How wide this is.
         */
        width: number;
    }
    /**
     * A ListMenu Thing.
     */
    interface IListMenu extends IMenu, MenuGraphr.IListMenuBase {
    }
    /**
     * A Menu to display the results of a KeyboardKeys Menu. A set of "blank" spaces
     * are available, and filled with Text Things as keyboard characters are chosen.
     */
    interface IKeyboardResultsMenu extends IMenu {
        /**
         * The blinking hypen Thing.
         */
        blinker: IThing;
        /**
         * The complete accumulated values of text characters added, in order.
         */
        completeValue: string[];
        /**
         * The displayed value on the screen.
         */
        displayedValue: string[];
        /**
         * Which blank space is currently available.
         */
        selectedChild: number;
    }
    /**
     * Steps to take after a Character's current walking step. These should be alternating
     * directions and numbers of steps to take; Function commands are allowed as well.
     */
    type IWalkingOnStop = IWalkingOnStopCommand[];
    /**
     * A single command within an IWalkingOnStop. This can be a number (how many steps to keep
     * taking in the current direction), a String (direction to face), Direction (direction to
     * face), or callback Function to evaluate.
     */
    type IWalkingOnStopCommand = number | string | IWalkingOnStopCommandFunction;
    /**
     * A callback to run on a Character mid-step. This may return true to indicate to the
     * managing TimeHandlr to stop the walking cycle.
     *
     * @param thing   The Character mid-step.
     * @returns Either nothing or whether the walking cycle should stop.
     */
    interface IWalkingOnStopCommandFunction {
        (thing: ICharacter): void | boolean;
    }
    /**
     * Settings for a color fade animation.
     */
    interface IColorFadeSettings {
        /**
         * What color to fade to/from (by default, "White").
         */
        color?: string;
        /**
         * How much to change the color's opacity each tick (by default, .33).
         */
        change?: number;
        /**
         * How many game upkeeps are between each tick (by default, 4).
         */
        speed?: number;
        /**
         * A callback for when the animation completes.
         */
        callback?: () => void;
    }
    /**
     * Settings to open the LevelUpStats menu for a Pokemon.
     */
    interface ILevelUpStatsMenuSettings {
        /**
         * The Pokemon to display the statistics for.
         */
        pokemon: IPokemon;
        /**
         * A menu container for LevelUpStats.
         */
        container?: string;
        /**
         * A callback for when the menu is deleted.
         */
        onMenuDelete?: () => void;
        /**
         * How to position the menu within its container.
         */
        position?: MenuGraphr.IMenuSchemaPosition;
        /**
         * How to size the menu.
         */
        size?: MenuGraphr.IMenuSchemaSize;
        /**
         * A horizontal offset for the menu.
         */
        textXOffset?: number;
    }
    /**
     * Settings to open the Items menu.
     *
     * @todo Refactor this interface's usage to contain IMenuSchema instead of inheritance.
     */
    interface IItemsMenuSettings extends MenuGraphr.IMenuSchema {
        /**
         * Items to override the player's inventory.
         */
        items?: IItemSchema[];
    }
    /**
     * Settings to open a keyboard menu.
     */
    interface IKeyboardMenuSettings {
        /**
         * A callback to replace key presses.
         */
        callback?: (...args: any[]) => void;
        /**
         * An initial complete value for the result (by default, []).
         */
        completeValue?: string[];
        /**
         * Whether the menu should start in lowercase (by default, false).
         */
        lowercase?: boolean;
        /**
         * Which blank space should initially be available (by default, 0).
         */
        selectedChild?: number;
        /**
         * The initial selected index (by default, [0, 0]).
         */
        selectedIndex?: [number, number];
        /**
         * A starting result value (by default, "").
         */
        title?: string;
        /**
         * A starting value to replace the initial underscores.
         */
        value?: string[];
    }
    /**
     * Things used in battle, stored by id.
     */
    interface IBattleThingsById extends IThingsById {
        /**
         * A container menu for a current battler, if applicable.
         */
        menu: IMenu;
        /**
         * The player's Character.
         */
        player: IPlayer;
        /**
         * The opponent's Character.
         */
        opponent: IEnemy;
    }
    interface IBattleTransitionSettings {
        /**
         * In-game state and settings for the upcoming battle.
         */
        battleInfo?: IBattleInfo;
        /**
         * A callback for when the transition completes.
         */
        callback?: () => void;
    }
    /**
     * Settings for the TransitionLineSpiral battle animation routine.
     */
    interface ITransitionLineSpiralSettings extends IBattleTransitionSettings {
        /**
         * How large the lines should be in units (by default, 15).
         */
        divisor?: number;
    }
    /**
     * Settings for the TransitionFlash battle animation routine.
     */
    interface ITransitionFlashSettings extends IBattleTransitionSettings {
        /**
         * How much to change opacity each tick (by default, .33).
         */
        change?: number;
        /**
         * How many flashes in total (by default, 6).
         */
        flashes?: number;
        /**
         * The ordered flash colors (by default, ["Black", "White"]).
         */
        flashColors?: string[];
        /**
         * How many upkeeps between change ticks (by default, 1).
         */
        speed?: number;
    }
    /**
     * Settings for the Battle cutscene routines.
     */
    interface IBattleCutsceneSettings {
        /**
         * In-game state and settings for the ongoing battle.
         */
        battleInfo: IBattleInfo;
        /**
         * The left position of the in-game opponent Thing.
         */
        opponentLeft?: number;
        /**
         * The top position of the in-game opponent Thing.
         */
        opponentTop?: number;
        /**
         * Things used in the battle, stored by id.
         */
        things: IBattleThingsById;
    }
    /**
     * Settings for a typical routine in the Battle cutscene.
     */
    interface IBattleRoutineSettings {
        /**
         * A callback for when the routine is done, if applicable.
         */
        callback?: (...args: any[]) => void;
        /**
         * A name of a routine to play when this is done, if applicable.
         */
        nextRoutine?: string;
    }
    /**
     * Settings for a typical move-based routine in the Battle cutscene.
     */
    interface IBattleMoveRoutineSettings extends IBattleRoutineSettings {
        /**
         * The name of the attacking battler, as "player" or "opponent".
         */
        attackerName?: string;
        /**
         * A callback for when the move is done.
         */
        callback?: () => void;
        /**
         * The move chosen by the user.
         */
        choiceOpponent?: string;
        /**
         * The move chosen by the user.
         */
        choicePlayer?: string;
        /**
         * How much damage will be done by the move.
         */
        damage?: number;
        /**
         * The name of the attacking battler, as "player" or "opponent".
         */
        defenderName?: string;
        /**
         * Whether the opponent has already moved this round.
         */
        moveOpponentDone?: boolean;
        /**
         * Whether the user has already moved this round.
         */
        movePlayerDone?: boolean;
    }
    /**
     * Settings for a typical action-based routine in the Battle cutscene.
     */
    interface IBattleActionRoutineSettings extends IBattleRoutineSettings {
        /**
         * Which battler this animation applies to.
         */
        battlerName?: "player" | "opponent";
        /**
         * How much damage this will do, if applicable.
         */
        damage?: number;
    }
    /**
     * Settings for a typical level-based routine in the Battle cutscene.
     */
    interface IBattleLevelRoutineSettings extends IBattleRoutineSettings {
        /**
         * How many experience points were gained, if applicable.
         */
        experienceGained?: number;
    }
    /**
     * Settings for an attacking move in battle.
     */
    interface IBattleAttackRoutineSettings extends IBattleRoutineSettings {
        /**
         * The attacking battler's name.
         */
        attackerName?: "player" | "opponent";
        /**
         * The defending battler's name.
         */
        defenderName?: "player" | "opponent";
    }
    /**
     * Settings for changing a defender's statistic in battle.
     */
    interface IBattleStatisticRoutineSettings extends IBattleAttackRoutineSettings {
        /**
         * How much to change the statistic.
         */
        amount?: number;
        /**
         * The name of the targeted statistic.
         */
        statistic?: string;
    }
    /**
     * Input functions used by IGameStartr instances.
     */
    class Inputs<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Checks whether direction keys such as up may trigger, which is true if the
         * game isn't paused, the isn't an active menu, and the MapScreener doesn't
         * specify blockInputs = true.
         *
         * @returns Whether direction keys may trigger.
         */
        canDirectionsTrigger(): boolean;
        /**
         * Reacts to a Character simulating an up key press. If possible, this causes
         * walking in the up direction. The onKeyDownUp mod trigger is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownUp(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to a Character simulating a right key press. If possible, this causes
         * walking in the right direction. The onKeyDownRight mod trigger is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownRight(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to a Character simulating a down key press. If possible, this causes
         * walking in the down direction. The onKeyDownDown mod trigger is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownDown(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to a Character simulating a left key press. If possible, this causes
         * walking in the left direction. The onKeyDownLeft mod trigger is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownLeft(thing: ICharacter, event?: Event): void;
        /**
         * Driver for a direction key being pressed. The MenuGraphr's active menu reacts
         * to the movement if it exists, or the triggering Character attempts to walk
         * if not. The onKeyDownDirectionReal mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownDirectionReal(thing: IPlayer, direction: Direction): void;
        /**
         * Reacts to the A key being pressed. The MenuGraphr's active menu reacts to
         * the selection if it exists. The onKeyDownA mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownA(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the B key being pressed. The MenuGraphr's active menu reacts to
         * the deselection if it exists. The onKeyDownB mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownB(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the pause key being pressed. The game is paused if it isn't
         * already. The onKeyDownPause mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownPause(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the mute key being pressed. The game has mute toggled, and the
         * onKeyDownMute mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyDownMute(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the select key being pressed. Toggles the use of the registered item.
         *
         * @param thing   The triggering Player.
         * @param event   The original user-caused Event.
         * @todo Extend the use for any registered item, not just the bicycle.
         */
        keyDownSelect(thing: IPlayer, event?: Event): void;
        /**
         * Reacts to the left key being lifted. The onKeyUpLeft mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpLeft(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the right key being lifted. The onKeyUpRight mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpRight(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the up key being lifted. The onKeyUpUp mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpUp(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the down key being lifted. The onKeyUpDown mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpDown(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the A key being lifted. The onKeyUpA mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpA(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the B key being lifted. The onKeyUpB mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpB(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the pause key being lifted. The onKeyUpPause mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        keyUpPause(thing: ICharacter, event?: Event): void;
        /**
         * Reacts to the context menu being activated. The pause menu is opened,
         * and the onMouseDownRight mod event is fired.
         *
         * @param thing   The triggering Character.
         * @param event   The original user-caused Event.
         */
        mouseDownRight(thing: ICharacter, event?: Event): void;
    }
    /**
     * Macro functions used by FullScreenPokemon instances.
     */
    class Macros<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Macro Function used to create an alternating pattern of Things.
         *
         * @param reference   Settings for a Checkered macro.
         * @returns A checkered pattern of Things.
         */
        macroCheckered(reference: any): any[];
        /**
         * Macro Function used to create a body of water.
         *
         * @param reference   Settings for a Water macro.
         * @returns A body of water.
         */
        macroWater(reference: any): any[];
        /**
         * Macro Function used to create a House.
         *
         * @param reference   Settings for a House macro.
         * @returns A House.
         */
        macroHouse(reference: any): any[];
        /**
         * Macro Function used to create a Large House.
         *
         * @param reference   Settings for a Large House macro.
         * @returns A Large House.
         */
        macroHouseLarge(reference: any): any[];
        /**
         * Macro Function used to create a Gym.
         *
         * @param reference   Settings for a Gym macro.
         * @returns A Gym.
         */
        macroGym(reference: any): any[];
        /**
         * Macro Function used to create a Building.
         *
         * @param reference   Settings for a Building macro.
         * @returns A Building.
         */
        macroBuilding(reference: any): any[];
        /**
         * Macro Function used to create a Mountain.
         *
         * @param reference   Settings for a Mountain macro.
         * @returns A Mountain.
         */
        macroMountain(reference: any): any[];
        /**
         * Macro Function used to create a Pokemon Center.
         *
         * @param reference   Settings for a Pokemon Center macro.
         * @returns A Pokemon Center.
         */
        macroPokeCenter(reference: any): any[];
        /**
         * Macro Function used to create a PokeMart.
         *
         * @param reference   Settings for a PokeMart macro.
         * @returns A PokeMart.
         */
        macroPokeMart(reference: any): any[];
    }
    /**
     * Maintenance functions used by FullScreenPokemon instances.
     */
    class Maintenance<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Generic maintenance Function for a group of Things. For each Thing, if
         * it isn't alive, it's removed from the group.
         *
         * @param things   A group of Things to maintain.
         */
        maintainGeneric(things: IThing[]): void;
        /**
         * Maintenance for all active Characters. Walking, grass maintenance, alive
         * checking, and quadrant maintenance are performed.
         *
         * @param characters   The Characters group of Things.
         */
        maintainCharacters(characters: ICharacter[]): void;
        /**
         * Maintenance for a Character visually in grass. The shadow is updated to
         * move or be deleted as needed.
         *
         * @param thing   A Character in grass.
         * @param other   Grass that thing is in.
         */
        maintainCharacterGrass(thing: ICharacter, other: IGrass): void;
        /**
         * Maintenance for a Player. The screen is scrolled according to the global
         * MapScreener.scrollability.
         *
         * @param player   An in-game Player Thing.
         */
        maintainPlayer(player: IPlayer): void;
    }
    /**
     * Map functions used by FullScreenPokemon instances.
     */
    class Maps<TEightBittr extends FullScreenPokemon> extends GameStartr.Maps<TEightBittr> {
        /**
         * Processes additional Thing attributes. For each attribute the Area's
         * class says it may have, if it has it, the attribute value proliferated
         * onto the Area.
         *
         * @param area The Area being processed.
         */
        areaProcess(area: IArea): void;
        /**
         * Adds a Thing via addPreThing based on the specifications in a PreThing.
         * This is done relative to MapScreener.left and MapScreener.top.
         *
         * @param prething   A PreThing whose Thing is to be added to the game.
         */
        addPreThing(prething: IPreThing): void;
        /**
         * Adds a new Player Thing to the game and sets it as EightBitter.player. Any
         * required additional settings (namely keys, power/size, and swimming) are
         * applied here.
         *
         * @param left   A left edge to place the Thing at (by default, 0).
         * @param bottom   A top to place the Thing upon (by default, 0).
         * @param useSavedInfo   Whether an Area's saved info in StateHolder should be
         *                       applied to the Thing's position (by default, false).
         * @returns A newly created Player in the game.
         */
        addPlayer(left?: number, top?: number, useSavedInfo?: boolean): IPlayer;
        /**
         * Sets the game state to a new Map, resetting all Things and inputs in the
         * process. The mod events are fired.
         *
         * @param name   The name of the Map.
         * @param location   The name of the Location within the Map.
         * @param noEntrance    Whether or not an entry Function should
         *                      be skipped (by default, false).
         * @remarks Most of the work here is done by setLocation.
         */
        setMap(name: string, location?: string, noEntrance?: boolean): void;
        /**
         * Sets the game state to a Location within the current map, resetting all
         * Things, inputs, the current Area, PixelRender, and MapScreener in the
         * process. The Location's entry Function is called to bring a new Player
         * into the game if specified. The mod events are fired.
         *
         * @param name   The name of the Location within the Map.
         * @param noEntrance   Whether or not an entry Function should
         *                     be skipped (by default, false).
         */
        setLocation(name: string, noEntrance?: boolean): void;
        /**
         * Analyzes a PreThing to be placed in one of the
         * cardinal directions of the current Map's boundaries
         * (just outside of the current Area).
         *
         * @param prething   A PreThing whose Thing is to be added to the game.
         * @param direction   The cardinal direction the Character is facing.
         * @remarks Direction is taken in by the .forEach call as the index.
         */
        addAfter(prething: IPreThing, direction: Direction): void;
        /**
         * A blank Map entrance Function where no Character is placed.
         */
        entranceBlank(): void;
        /**
         * Standard Map entrance Function. Character is placed based on specified Location.
         *
         * @param location   The name of the Location within the Map.
         */
        entranceNormal(location: ILocation): void;
        /**
         * Map entrace Function used when player is added to the Map at the beginning
         * of play. Retrieves Character position from the previous save state.
         */
        entranceResume(): void;
        /**
         * Runs an AreaSpawner to place its Area's Things in the map.
         *
         * @param thing   An in-game AreaSpawner.
         * @param area   The Area associated with thing.
         */
        activateAreaSpawner(thing: IAreaSpawner, area: IArea): void;
    }
    /**
     * Menu functions used by FullScreenPokemon instances.
     */
    class Menus<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Opens the Pause menu.
         */
        openPauseMenu(): void;
        /**
         * Closes the Pause menu.
         */
        closePauseMenu(): void;
        /**
         * Toggles whether the Pause menu is open. If there is an active menu, A
         * Start key trigger is registered in the MenuGraphr instead.
         */
        togglePauseMenu(thing: IThing): void;
        /**
         * Opens the Pokedex menu.
         */
        openPokedexMenu(): void;
        /**
         * Opens the context menu within the Pokedex menu for the selected Pokemon.
         *
         * @param settings   Settings for the selected Pokemon, including its HM moves.
         */
        openPokemonMenuContext(settings: any): void;
        /**
         * Opens a statistics menu for a Pokemon.
         *
         * @param pokemon   A Pokemon to show statistics of.
         */
        openPokemonMenuStats(pokemon: IPokemon): void;
        /**
         * Opens the LevelUpStats menu for a Pokemon to view its statistics.
         *
         * @param settings   Settings to open the menu.
         */
        openPokemonLevelUpStats(settings: ILevelUpStatsMenuSettings): void;
        /**
         * Open the secondary statistics menu from the LevelUpStats menu.
         *
         * @param pokemon   The Pokemon to open the menu for.
         */
        openPokemonMenuStatsSecondary(pokemon: IPokemon): void;
        /**
         * Opens a Pokedex listing for a Pokemon.
         *
         * @param title   The title of the Pokemon to open the listing for.
         * @param callback   A callback for when the menu is closed.
         */
        openPokedexListing(title: string[], callback?: (...args: any[]) => void, menuSettings?: any): void;
        /**
         * Opens a Pokemon menu for the Pokemon in the player's party.
         *
         * @param settings   Custom attributes to apply to the menu.
         */
        openPokemonMenu(settings: MenuGraphr.IMenuSchema): void;
        /**
         * Opens the Items menu for the items in the player's inventory.
         *
         * @param settings   Custom attributes to apply to the menu, as well as items
         *                   to optionally override the player's inventory.
         */
        openItemsMenu(settings: IItemsMenuSettings): void;
        /**
         * Opens the Player menu.
         */
        openPlayerMenu(): void;
        /**
         * Opens the Save menu.
         */
        openSaveMenu(): void;
        /**
         * Opens the Keyboard menu and binds it to some required callbacks.
         *
         * @param settings   Settings to apply to the menu and for callbacks.
         */
        openKeyboardMenu(settings?: IKeyboardMenuSettings): void;
        /**
         * Adds a value to the keyboard menu from the currently selected item.
         */
        addKeyboardMenuValue(): void;
        /**
         * Removes the rightmost keyboard menu value.
         */
        removeKeyboardMenuValue(): void;
        /**
         * Switches the keyboard menu's case.
         */
        switchKeyboardCase(): void;
        /**
         * Opens the Town Map menu.
         *
         * @param settings   Custom attributes to apply to the menu.
         */
        openTownMapMenu(settings?: MenuGraphr.IMenuSchema): void;
        /**
         * Shows allowed flying locations on the Town Map menu.
         */
        showTownMapFlyLocations(): void;
        /**
         * Shows a Pokemon's nest locations on the Town Map menu.
         *
         * @param title   The title of the Pokemon to show nest locations of.
         */
        showTownMapPokemonLocations(title: string[]): void;
        /**
         * Displays message when a Player tries to use an item that cannot be used.
         *
         * @param player   A Player who cannot use an item.
         */
        cannotDoThat(player: IPlayer): void;
        /**
         * Displays a message to the user.
         *
         * @param thing   The Thing that triggered the error.
         * @param message   The message to be displayed.
         */
        displayMessage(thing: IThing, message: string): void;
    }
    /**
     * Physics functions used by FullScreenPokemon instances.
     */
    class Physics<TEightBittr extends FullScreenPokemon> extends GameStartr.Physics<TEightBittr> {
        /**
         * Determines the bordering direction from one Thing to another.
         *
         * @param thing   The source Thing.
         * @param other   The destination Thing.
         * @returns The direction from thing to other.
         */
        getDirectionBordering(thing: IThing, other: IThing): Direction;
        /**
         * Determines the direction from one Thing to another.
         *
         * @param thing   The source Thing.
         * @param other   The destination Thing.
         * @returns The direction from thing to other.
         * @remarks Like getDirectionBordering, but for cases where the two Things
         *          aren't necessarily touching.
         */
        getDirectionBetween(thing: IThing, other: IThing): Direction;
        /**
         * Checks whether one Thing is overlapping another.
         *
         * @param thing   An in-game Thing.
         * @param other   An in-game Thing.
         * @returns Whether thing and other are overlapping.
         */
        isThingWithinOther(thing: IThing, other: IThing): boolean;
        /**
         * Determines whether a Character is visually within grass.
         *
         * @param thing   An in-game Character.
         * @param other   Grass that thing might be in.
         * @returns Whether thing is visually within other.
         */
        isThingWithinGrass(thing: ICharacter, other: IGrass): boolean;
        /**
         * Shifts a Character according to its xvel and yvel.
         *
         * @param thing   A Character to shift.
         */
        shiftCharacter(thing: ICharacter): void;
        /**
         * Sets a Player looking in a direction and updates MapScreener.
         *
         * @param thing   An in-game Player.
         * @param direction   A direction for thing to look at.
         */
        setPlayerDirection(thing: IPlayer, direction: Direction): void;
        /**
         * Standard Function to kill a Thing, which means marking it as dead and
         * clearing its numquads, resting, movement, and cycles. It will later be
         * removed by its maintain* Function.
         *
         * @param thing   A Thing to kill.
         */
        killNormal(thing: IThing): void;
    }
    /**
     * Scrolling functions used by FullScreenPokemon instances.
     */
    class Scrolling<TEightBittr extends FullScreenPokemon> extends GameStartr.Scrolling<TEightBittr> {
        /**
         * Centers the current view of the Map based on scrollability.
         */
        centerMapScreen(): void;
        /**
         * Scrolls the game window horizontally until the Map is centered based on
         * the Area.
         */
        centerMapScreenHorizontally(): void;
        /**
         * Scrolls the game window vertically until the Map is centered based on
         * the Area.
         */
        centerMapScreenVertically(): void;
        /**
         * Scrolls the game window horizontally until the Map is centered on the player.
         */
        centerMapScreenHorizontallyOnPlayer(): void;
        /**
         * Scrolls the game window vertically until the Map is centered on the player.
         */
        centerMapScreenVerticallyOnPlayer(): void;
        /**
         * Determines the in-game measurements of the boundaries of the current Area.
         *
         * @returns The boundaries of the current Area.
         */
        getAreaBoundariesReal(): IAreaBoundaries;
        /**
         * Determines the scrollable directions.
         *
         * @returns The direction(s) that are scrollable.
         */
        getScreenScrollability(): Scrollability;
        /**
         * Determines how much to scroll horizontally during upkeep based
         * on player xvel and horizontal bordering.
         *
         * @returns How far to scroll horizontally.
         */
        getHorizontalScrollAmount(): number;
        /**
         * Determines how much to scroll vertically during upkeep based
         * on player yvel and vertical bordering.
         *
         * @returns How far to scroll vertically.
         */
        getVerticalScrollAmount(): number;
        /**
         * Expands the MapScreener boundaries for a newly added Area.
         *
         * @param area   The newly added Area.
         * @param x   The x-location of the expansion.
         * @param y   The y-location of the expansion.
         * @todo For now, this assumes any Area with an added Area is outdoors (which
         *       hasn't been shown to be incorrect yet).
         */
        expandMapBoundariesForArea(area: IArea, dx: number, dy: number): void;
    }
    /**
     * Generator for FullScreenPokemon settings.
     */
    class SettingsGenerator {
        /**
         * @returns FullScreenPokemon settings.
         */
        generate(): IFullScreenPokemonStoredSettings;
    }
    /**
     * Storage functions used by FullScreenPokemon instances.
     */
    class Storage<TEightBittr extends FullScreenPokemon> extends EightBittr.Component<TEightBittr> {
        /**
         * Clears the data saved in localStorage and saves it in a new object in localStorage
         * upon a new game being started.
         */
        clearSavedData(): void;
        /**
         * Checks to see if oldLocalStorage is defined in localStorage; if that is true and a prior game
         * hasn't been saved, the data is restored under localStorage.
         */
        checkForOldStorageData(): void;
        /**
         * Saves all persistant information about the current game state.
         *
         * @param showText   Whether to display a status menu (by default, false).
         */
        saveGame(showText?: boolean): void;
        /**
         * Automatically saves the game.
         */
        autoSave(): void;
        /**
         * Saves current game state and downloads
         * it onto the client's computer as a JSON file.
         */
        downloadSaveGame(): void;
        /**
         * Loads JSON game data from a data string and sets it as the game state,
         * then starts gameplay.
         *
         * @param dataRaw   Raw data to be parsed as JSON.
         */
        loadData(dataRaw: string): void;
        /**
         * Saves the positions of all Characters in the game.
         */
        saveCharacterPositions(): void;
        /**
         * Saves the position of a certain Character.
         *
         * @param character   An in-game Character.
         * @param id   The ID associated with the Character.
         */
        saveCharacterPosition(character: ICharacter, id: string): void;
        /**
         * Pushes and saves the current state of a variable to a stack.
         *
         * @param thing   The Thing, Area, Map, or Location saving its state of a variable.
         * @param title   Name for the state being saved.
         * @param value   The values of the variable to be saved.
         */
        addStateHistory(thing: IStateSaveable, title: string, value: any): void;
        /**
         * Updates to the most recently saved state for a variable.
         *
         * @param thing   The Thing having its state restored.
         * @param title   The name of the state to restore.
         */
        popStateHistory(thing: IStateSaveable, title: string): void;
        /**
         * Adds an in-game item to the character's bag.
         *
         * @param item    The item being stored.
         * @param amount   The quantity of this item being stored.
         */
        addItemToBag(item: string, amount?: number): void;
        /**
         * Adds a Pokemon by title to the Pokedex.
         *
         * @param titleRaw   The raw title of the Pokemon.
         * @param status   Whether the Pokemon has been seen and caught.
         */
        addPokemonToPokedex(titleRaw: string[], status: PokedexListingStatus): void;
        /**
         * Retrieves known Pokedex listings in ascending order. Unknown Pokemon are
         * replaced with `undefined`.
         *
         * @returns Pokedex listings in ascending order.
         */
        getPokedexListingsOrdered(): IPokedexInformation[];
    }
    /**
     * Thing manipulation functions used by FullScreenPokemon instances.
     */
    class Things<TEightBittr extends FullScreenPokemon> extends GameStartr.Things<TEightBittr> {
        /**
         * Slight addition to the parent thingProcess Function. The Thing's hit
         * check type is cached immediately, and a default id is assigned if an id
         * isn't already present.
         *
         * @param thing   The Thing being processed.
         * @param title   What type Thing this is (the name of the class).
         * @param settings   Additional settings to be given to the Thing.
         * @param defaults   The default settings for the Thing's class.
         * @remarks This is generally called as the onMake call in an ObjectMakr.
         */
        process(thing: IThing, title: string, settings: any, defaults: any): void;
        /**
         * Overriden Function to adds a new Thing to the game at a given position,
         * relative to the top left corner of the screen. The Thing is also
         * added to the Thing GroupHolder.group container.
         *
         *
         * @param thingRaw   What type of Thing to add. This may be a String of
         *                   the class title, an Array containing the String
         *                   and an Object of settings, or an actual Thing.
         * @param left   The horizontal point to place the Thing's left at (by
         *               default, 0).
         * @param top   The vertical point to place the Thing's top at (by default,
         *              0).
         * @param useSavedInfo   Whether an Area's saved info in StateHolder should be
         *                       applied to the Thing's position (by default, false).
         */
        add(thingRaw: string | IThing | [string, any], left?: number, top?: number, useSavedInfo?: boolean): IThing;
        /**
         * Applies a thing's stored xloc and yloc to its position.
         *
         * @param thing   A Thing being placed in the game.
         */
        applySavedPosition(thing: IThing): void;
    }
    /**
     * Miscellaneous utility functions used by FullScreenPokemon instances.
     */
    class Utilities<TEightBittr extends FullScreenPokemon> extends GameStartr.Utilities<TEightBittr> {
        /**
         * Retrieves the Thing in MapScreener.thingById of the given id.
         *
         * @param id   An id of a Thing to retrieve.
         * @returns The Thing under the given id, if it exists.
         */
        getThingById(id: string): IThing;
        /**
         * Creates a new Pokemon from a schema, using the newPokemon equation.
         *
         * @param schema   A description of the Pokemon.
         * @returns A newly created Pokemon.
         */
        createPokemon(schema: IWildPokemonSchema): IPokemon;
        /**
         * Creates a new String equivalent to an old String repeated any number of
         * times. If times is 0, a blank String is returned.
         *
         * @param {String} string   The characters to repeat.
         * @param {Number} [times]   How many times to repeat (by default, 1).
         */
        stringOf(str: string, times?: number): string;
        /**
         * Turns a Number into a String with a prefix added to pad it to a certain
         * number of digits.
         *
         * @param {Mixed} number   The original Number being padded.
         * @param {Number} size   How many digits the output must contain.
         * @param {Mixed} [prefix]   A prefix to repeat for padding (by default, "0").
         * @returns {String}
         * @example
         * makeDigit(7, 3); // '007'
         * makeDigit(7, 3, 1); // '117'
         */
        makeDigit(num: number | string, size: number, prefix?: any): string;
        /**
         * Checks all members of an Array to see if a specified key exists within one of them.
         *
         * @param array   The Array being checked.
         * @param key   The key being searched for.
         * @returns Whether the key exists within the Array members.
         */
        checkArrayMembersIndex(array: any[], key: string): boolean;
        /**
         * Function to add a stackable item to an Array. If it already exists,
         * the Function increases its value by count. Otherwise, it adds a new item
         * to the Array.
         *
         * @param array   The Array containing the stackable items.
         * @param title   The name of the stackable item to be added.
         * @param count   The number of these stackable items.
         * @param keyTitle   The key associated with the item's name, such as "item".
         * @param keyCount   The key associated with the item's count, such as "amount".
         * @returns Whether the stackable item was newly added.
         */
        combineArrayMembers(array: any[], title: string, count: number, keyTitle: string, keyCount: string): boolean;
    }
    /**
     * A free HTML5 remake of Nintendo's original Pokemon, expanded for the modern web.
     */
    class FullScreenPokemon extends GameStartr.GameStartr {
        /**
         * An in-game battle management system for RPG-like battles between actors.
         */
        BattleMover: BattleMovr.IBattleMovr;
        /**
         * GUI-based level creation & editing for GameStartr.
         */
        LevelEditor: LevelEditr.ILevelEditr;
        /**
         * A simple container for Map attributes given by switching to an Area within
         * that map.
         */
        MapScreener: IMapScreenr;
        /**
         * In-game menu and dialog management system for GameStartr.
         */
        MenuGrapher: MenuGraphr.IMenuGraphr;
        /**
         * General localStorage saving for collections of state.
         */
        StateHolder: StateHoldr.IStateHoldr;
        /**
         * General localStorage saving for collections of state.
         */
        UserWrapper: UserWrappr.IUserWrappr;
        /**
         * Animation functions used by this instance.
         */
        animations: Animations<FullScreenPokemon>;
        /**
         * Battle functions used by this instance.
         */
        battles: Battles<FullScreenPokemon>;
        /**
         * Collision functions used by this instance.
         */
        collisions: Collisions<FullScreenPokemon>;
        /**
         * Cutscene functions used by this instance.
         */
        cutscenes: Cutscenes<FullScreenPokemon>;
        /**
         * Cycling functions used by this instance.
         */
        cycling: Cycling<FullScreenPokemon>;
        /**
         * Fishing functions used by this instance.
         */
        fishing: Fishing<FullScreenPokemon>;
        /**
         * Gameplay functions used by this instance.
         */
        gameplay: Gameplay<FullScreenPokemon>;
        /**
         * Graphics functions used by this instance.
         */
        graphics: Graphics<FullScreenPokemon>;
        /**
         * Input functions used by this instance.
         */
        inputs: Inputs<FullScreenPokemon>;
        /**
         * Macro functions used by this instance.
         */
        macros: Macros<FullScreenPokemon>;
        /**
         * Maintenance functions used by this instance.
         */
        maintenance: Maintenance<FullScreenPokemon>;
        /**
         * Maps functions used by this instance.
         */
        maps: Maps<FullScreenPokemon>;
        /**
         * Menu functions used by this instance.
         */
        menus: Menus<FullScreenPokemon>;
        /**
         * Physics functions used by this instance.
         */
        physics: Physics<FullScreenPokemon>;
        /**
         * Thing manipulation functions used by this instance.
         */
        things: Things<FullScreenPokemon>;
        /**
         * Scrolling functions used by this instance.
         */
        scrolling: Scrolling<FullScreenPokemon>;
        /**
         * Storage functions used by this instance.
         */
        storage: Storage<FullScreenPokemon>;
        /**
         * Utility functions used by this instance.
         */
        utilities: Utilities<FullScreenPokemon>;
        /**
         * Static settings passed to individual reset Functions.
         */
        settings: IFullScreenPokemonStoredSettings;
        /**
         * How much to scale each pixel from PixelDrawr to the real canvas.
         */
        scale: number;
        /**
         * How much to expand each pixel from raw sizing measurements to in-game.
         */
        unitsize: number;
        /**
         * The game's player, which (when defined) will always be a Player Thing.
         */
        player: IPlayer;
        /**
         * The total FPSAnalyzr ticks that have elapsed since the constructor or saving.
         */
        ticksElapsed: number;
        /**
         * Initializes a new instance of the FullScreenPokemon class.
         *
         * @param settings   Any additional user-provided settings.
         */
        constructor(settings: GameStartr.IGameStartrSettings);
        /**
         * Resets the minor system components.
         */
        protected resetComponents(): void;
        /**
         * Resets the major system modules.
         *
         * @param settings   Any additional user-provided settings.
         */
        protected resetModules(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.ObjectMaker.
         *
         * Because many Thing functions require access to other FSP modules, each is
         * given a reference to this container FSP via properties.thing.FSP.
         * See #.
         *
         * @param settings   Any additional user-provided settings.
         */
        protected resetObjectMaker(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.ScenePlayer.
         *
         * @param settings   Any additional user-provided settings.
         */
        protected resetScenePlayer(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.StateHolder.
         *
         * @param customs   Any optional custom settings.
         */
        protected resetStateHolder(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.MathDecider, adding its existing NumberMaker to the constants.
         *
         * @param customs   Any optional custom settings.
         */
        protected resetMathDecider(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.MenuGrapher.
         *
         * @param customs   Any optional custom settings.
         */
        protected resetMenuGrapher(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.BattleMover.
         *
         * @param customs   Any optional custom settings.
         */
        protected resetBattleMover(settings: GameStartr.IGameStartrSettings): void;
        /**
         * Sets this.container.
         *
         * The container is given the "Press Start" font, and the PixelRender is told
         * which groups to draw in order.
         *
         * @param settings   Extra settings such as screen size.
         */
        protected resetContainer(settings: GameStartr.IGameStartrSettings): void;
    }
}
declare var module: any;
