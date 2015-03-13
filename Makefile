.PHONY: images

images:
	docker build -t binocarlos/multi-http-demo-api api
	docker build -t binocarlos/multi-http-demo-server server