const chList = [
  'http://37.220.36.53:7904/;?type=http&nocache=18236',
  'http://ststmks.s3.amazonaws.com/izakayasound/media/kitanohomare.mp3',
  'http://uk2.internet-radio.com:8024//stream?type=http&nocache=541',
  'http://uk1.internet-radio.com:8267/stream?type=http&nocache=541',
  'http://media-ice.musicradio.com/HeartSussexMP3',
  'http://64.71.79.181:8024/;',
  'http://bluford.torontocast.com:8504/;',
  'http://musicbird.leanstream.co/JCB076-MP3?args=tunein_02',
  'http://bigrradio.cdnstream1.com/5174_128',
  'http://hyades.shoutca.st:8043/stream',
  'http://itori.animenfo.com:443/;',
  'http://144.217.64.13:7100/;?type=http&nocache=18238',
  'http://184.75.223.178:8102/;?type=http&nocache=18236',
  'http://51.15.76.3:80/;?type=http&nocache=18237',
  'http://50.7.130.2:13014/;?type=http&nocache=18239',
  'http://94.23.67.172:8010/;?type=http&nocache=18240',
  'http://212.3.234.219:8080/wr-test-128.mp3',
  'http://51.15.76.3:80/;?type=http&nocache=18237',
  'http://ice3.somafm.com/deepspaceone-128-mp3',
  'https://streamer.radio.co/s2c3cc784b/listen',
  'http://50.7.130.2:13014/;?type=http&nocache=18239',
  'http://94.23.67.172:8010/;?type=http&nocache=18240',
  'http://212.18.63.135:9034/;?type=http&nocache=18242',
  'http://158.69.38.195:20278/;?type=http&nocache=18243',
  'http://149.56.74.125:9628/;?type=http&nocache=18244',
  'http://192.240.102.198:14150/;?type=http&nocache=18245',
  'http://5.178.87.156:2068/;?type=http&nocache=18247',
  'http://192.99.38.174:9342/;?type=http&nocache=18249',
  'http://87.229.24.114:35110/;?type=http&nocache=18250',
  'http://46.105.171.217:8024/;?type=http&nocache=18251',
  'http://78.31.65.20:8080/;?type=http&nocache=18252',
  'http://50.117.1.60:80/;?type=http&nocache=18255',
  'http://151.80.97.38:8224/;?type=http&nocache=18256',
  'http://167.114.251.212:80/;?type=http&nocache=18258',
  'http://94.23.66.155:8080/;?type=http&nocache=18259',
  'http://178.162.208.117:8418/;?type=http&nocache=18260',
  'http://149.56.74.125:9508/;?type=http&nocache=18262',
  'http://82.199.155.117:8000/;?type=http&nocache=18263',
  'http://109.123.70.138:8136/;?type=http&nocache=18264',
  'http://94.75.227.133:7005/;?type=http&nocache=18265',
  'http://192.151.153.234:9968/;?type=http&nocache=18268',
  'http://185.66.249.48:9600/;?type=http&nocache=18269',
  'http://50.97.94.44:8086/;?type=http&nocache=18271',
  'http://149.56.147.197:8231/;?type=http&nocache=18273',
  'http://78.46.73.91:9043/;?type=http&nocache=18274',
  'https://cdn-beta.tunein.com/assets/media/blank.mp3',
  'http://85.10.198.55:8000/;?type=http&nocache=18276',
  'http://37.220.36.53:7904/;?type=http&nocache=18277',
  'http://51.15.76.3:80/;?type=http&nocache=18278',
  'https://vapor.fm:8000/stream',
];

const channels = chList.map((url, index) => {
  const channelNumber = index + 1;
  return {
    id: index,
    name: `Channel ${channelNumber.toString().padStart(2, '0')}`,
    url,
  };
});

const channelGrid = document.getElementById('channel-grid');
const audioPlayer = document.getElementById('music');
const nowPlaying = document.getElementById('now-playing');
const statusList = document.getElementById('status-list');
const healthCheckButton = document.getElementById('health-check');
const healthStatus = document.getElementById('health-check-status');

const renderChannels = () => {
  channelGrid.innerHTML = '';

  channels.forEach((channel) => {
    const label = document.createElement('label');
    label.className = 'channel';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'channel';
    input.value = channel.id;
    input.addEventListener('change', () => {
      playChannel(channel);
    });

    const span = document.createElement('span');
    span.textContent = channel.name;

    label.appendChild(input);
    label.appendChild(span);
    channelGrid.appendChild(label);
  });
};

const playChannel = (channel) => {
  audioPlayer.src = channel.url;
  audioPlayer.load();
  audioPlayer
    .play()
    .then(() => {
      nowPlaying.textContent = channel.name;
    })
    .catch(() => {
      nowPlaying.textContent = `${channel.name} (再生エラー)`;
    });
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const checkStream = async (channel) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(channel.url, {
      method: 'GET',
      headers: { Range: 'bytes=0-1' },
      cache: 'no-store',
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`status ${response.status}`);
    }

    return { channel, ok: true };
  } catch (error) {
    return { channel, ok: false, error };
  } finally {
    clearTimeout(timeoutId);
  }
};

const updateStatusRow = (row, ok) => {
  row.classList.toggle('status-ok', ok);
  row.classList.toggle('status-fail', !ok);
  row.querySelector('.status-text').textContent = ok ? 'OK' : 'NG';
};

const runHealthCheck = async () => {
  healthCheckButton.disabled = true;
  healthStatus.textContent = 'チェック中...';
  statusList.innerHTML = '';

  for (const channel of channels) {
    const row = document.createElement('li');
    row.className = 'status-row';
    row.innerHTML = `
      <span class="status-name">${channel.name}</span>
      <span class="status-text">...</span>
    `;

    statusList.appendChild(row);

    const result = await checkStream(channel);
    updateStatusRow(row, result.ok);

    await sleep(120);
  }

  healthStatus.textContent = 'チェック完了';
  healthCheckButton.disabled = false;
};

healthCheckButton.addEventListener('click', runHealthCheck);

renderChannels();
