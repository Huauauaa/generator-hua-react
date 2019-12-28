"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const _ = require("lodash");
const path = require("path");

function makeGeneratorName(name) {
  name = _.kebabCase(name);
  name = name.indexOf("generator-") === 0 ? name : "generator-" + name;
  return name;
}

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  async prompting() {
    this.log(
      yosay(
        `Welcome to the polished ${chalk.red("generator-hua-react")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "What is your project name?",
        default: makeGeneratorName(path.basename(process.cwd()))
      }
      // {
      //   type: "list",
      //   name: "license",
      //   message: "What pre-css should be used?",
      //   choices: ["less", "sass"],
      //   default: "less"
      // },
      // {
      //   type: "confirm",
      //   name: "skipInstall",
      //   message: "Would you like to skip install dependencies?",
      //   default: true
      // }
    ];

    this.props = await this.prompt(prompts);
  }

  writing() {
    this.fs.copyTpl(
      [this.templatePath("**")],
      this.destinationPath(`${this.props.name}/`),
      {
        name: this.props.name
      }
    );

    this.fs.copy(
      this.templatePath(".eslintignore"),
      this.destinationPath(`${this.props.name}/.eslintignore`)
    );

    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(`${this.props.name}/.eslintrc.js`)
    );

    // This.fs.copy(
    //   this.templatePath(".gitignore"),
    //   this.destinationPath(`${this.props.name}/.gitignore`)
    // );

    this.fs.copy(
      this.templatePath(".prettierignore"),
      this.destinationPath(`${this.props.name}/.prettierignore`)
    );

    this.fs.copy(
      this.templatePath(".prettierrc.js"),
      this.destinationPath(`${this.props.name}/.prettierrc.js`)
    );
    this.fs.copy(
      this.templatePath(".env"),
      this.destinationPath(`${this.props.name}/.env`)
    );
  }

  conflicts() {}

  install() {
    // If (this.props.skipInstall) {
    //   this.installDependencies({ bower: false });
    // }
  }

  end() {
    this.log(
      yosay(`${this.props.name} has been set up successfully, congratulates!`)
    );
  }
};
