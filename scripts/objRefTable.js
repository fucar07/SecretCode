const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Behaviors.Flash,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.Particles,
		C3.Plugins.Text,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.loopindex,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.tokenat,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Exps.uppercase,
		C3.Plugins.Sprite.Exps.AnimationFrameTag,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.PickAll,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.ResetGlobals
	];
};
self.C3_JsPropNameTable = [
	{Tween: 0},
	{golge: 0},
	{arkaplan: 0},
	{spbeyaz: 0},
	{mebLogo: 0},
	{emegigecenler: 0},
	{about: 0},
	{reference: 0},
	{Logo: 0},
	{logoYazi: 0},
	{name: 0},
	{Flash: 0},
	{gorseller: 0},
	{TabloArkaplan: 0},
	{tabloCerceve: 0},
	{a: 0},
	{b: 0},
	{DragDrop: 0},
	{harfler: 0},
	{harf: 0},
	{kutu: 0},
	{messages: 0},
	{Sine: 0},
	{welldone: 0},
	{Touch: 0},
	{Mouse: 0},
	{Browser: 0},
	{Audio: 0},
	{Particles: 0},
	{btn_basla: 0},
	{btn_anasayfa: 0},
	{btn_bilgi: 0},
	{btn_emegigecenler: 0},
	{btn_kaynakca: 0},
	{btn_replay: 0},
	{durum: 0},
	{btn_ses: 0},
	{btn_tamekran: 0},
	{label: 0},
	{ButonAilesi: 0},
	{AnaSayfaGorseller: 0},
	{secilenFrame: 0},
	{dogru: 0},
	{kutuSayisi: 0},
	{Cumleler: 0},
	{sayac: 0},
	{harfName: 0},
	{harfname2: 0},
	{kelime: 0},
	{musicDurum: 0}
];

self.InstanceType = {
	golge: class extends self.ISpriteInstance {},
	arkaplan: class extends self.ISpriteInstance {},
	spbeyaz: class extends self.ISpriteInstance {},
	mebLogo: class extends self.ISpriteInstance {},
	emegigecenler: class extends self.ISpriteInstance {},
	about: class extends self.ISpriteInstance {},
	reference: class extends self.ISpriteInstance {},
	Logo: class extends self.ISpriteInstance {},
	logoYazi: class extends self.ISpriteInstance {},
	gorseller: class extends self.ISpriteInstance {},
	TabloArkaplan: class extends self.ISpriteInstance {},
	tabloCerceve: class extends self.ISpriteInstance {},
	harfler: class extends self.ISpriteInstance {},
	kutu: class extends self.ISpriteInstance {},
	messages: class extends self.ISpriteInstance {},
	welldone: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	btn_basla: class extends self.ISpriteInstance {},
	btn_anasayfa: class extends self.ISpriteInstance {},
	btn_bilgi: class extends self.ISpriteInstance {},
	btn_emegigecenler: class extends self.ISpriteInstance {},
	btn_kaynakca: class extends self.ISpriteInstance {},
	btn_replay: class extends self.ISpriteInstance {},
	btn_ses: class extends self.ISpriteInstance {},
	btn_tamekran: class extends self.ISpriteInstance {},
	label: class extends self.ITextInstance {},
	ButonAilesi: class extends self.ISpriteInstance {},
	AnaSayfaGorseller: class extends self.ISpriteInstance {}
}