package conf

type Rim struct {
	AppId string `yaml:"app_id"`
	AppKey string `yaml:"app_key"`
	TcpHost string `yaml:"tcp_host"`
	ApiHost string `yaml:"api_host"`
}