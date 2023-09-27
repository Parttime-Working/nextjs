module.exports = {
  apps: [
    {
      name: 'nextjs',
      script: 'yarn',
      args: 'start',
      cwd: './webui',
      exec_mode: 'cluster',
      instances: 1,
      // max_memory_restart: '1500M',
      interpreter: 'bash',
      time: false,
      watch: ['webui'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      source_map_support: false,
      // http://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables
      instance_var: 'NODE_APP_INSTANCE',
      // log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: '../logs/nextjs/web.log',
      out_file: '../logs/nextjs/web.log',
      merge_logs: true,
      min_uptime: '1m',
      listen_timeout: 1000,
      kill_timeout: 1000,
      wait_ready: true,
      // http://pm2.keymetrics.io/docs/usage/signals-clean-restart/
      max_restarts: 3,
      // restart_delay: 1000,
      autorestart: true,
      vizion: false,
    },
  ],
};
