(function(app) {
	app.AppComponent = ng.core
		.Component({
			selector: 'appstore-app', 
			template: `
			<h1> {{title}} </h1>
			`,
			styleUrls: ['app/app.component.css']
		})
		.Class({
			constructor: function() {
				this.title="Angular App Store";
			}
		});
})(window.app || (window.app = {}));

